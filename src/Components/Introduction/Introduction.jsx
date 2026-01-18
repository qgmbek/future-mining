import ScrollReveal from "../../animations/ScrollReveal/ScrollReveal";

export default function Introduction() {
  return (
    <div style={{ color: "var(--warning)" }}>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        We are redefining the future of mining through cutting-edge innovation,
        sustainable practices, and unmatched precision. Our mission is to
        responsibly harness the earth’s resources while safeguarding the planet,
        leveraging advanced technology and visionary solutions to deliver
        lasting value for communities, industries, and generations to come.
      </ScrollReveal>
    </div>
  );
}
