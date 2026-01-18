import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./accordions.css";

const faqs = [
  {
    question: "How long does it take to install solar panels?",
    answer:
      "Most residential solar installations are completed within 1–3 days, depending on system size and site conditions.",
  },
  {
    question: "What services do you offer for businesses?",
    answer:
      "We provide end-to-end solar solutions for businesses, including design, installation, monitoring, and ongoing support.",
  },
  {
    question: "Do you offer warranties on your products?",
    answer:
      "Yes. Our solar panels typically come with a 25-year performance warranty, along with workmanship guarantees.",
  },
  {
    question: "Can small businesses benefit from your services?",
    answer:
      "Absolutely. Our systems are scalable and designed to meet the needs and budgets of small and growing businesses.",
  },
  {
    question: "What kind of maintenance is required for solar systems?",
    answer:
      "Solar systems require minimal maintenance—mainly occasional cleaning and periodic system health checks.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const answerVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  expanded: {
    opacity: 1,
    height: "auto",
    marginTop: "1.5rem",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants = {
  collapsed: { rotate: 0, scale: 1 },
  expanded: { rotate: 180, scale: 1.1 },
};

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.5],
  );

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % faqs.length,
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={containerRef}
      className="faq-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      style={{ y, opacity }}
    >
      <motion.div className="faq-left" variants={itemVariants}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            initial={{ backgroundPosition: "200% center" }}
            animate={isInView ? { backgroundPosition: "0% center" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="gradient-text"
          >
            Here are some frequently
            <br />
            asked questions
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="subtitle"
        >
          Better Energy Starts Here that is Powered by Advanced Solar Materials
          and with it's Modern Tech
        </motion.p>

        <motion.div
          className="decoration"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
          }}
        />
      </motion.div>

      <motion.div
        className="faq-right"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""} ${hoveredIndex === index ? "hovered" : ""}`}
            onClick={() => toggle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <motion.div className="faq-question" layout="position">
              <motion.span
                className="question-text"
                animate={{
                  color: activeIndex === index ? "var(--warning)" : "#1f2937",
                }}
              >
                {faq.question}
              </motion.span>

              <motion.div
                className="icon-wrapper"
                variants={iconVariants}
                animate={activeIndex === index ? "expanded" : "collapsed"}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  variants={answerVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  layout
                >
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {faq.answer}
                    <motion.span
                      className="highlight"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="hover-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -20, 0],
              x: Math.sin(i) * 10,
              rotate: 360,
            }}
            transition={{
              y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
              rotate: {
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              x: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
