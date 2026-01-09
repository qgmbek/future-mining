import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="newsletter-left">
          <p className="small">DON'T MISS OUT!</p>
          <p className="small">SIGN UP TO OUR NEWSLETTERS HERE</p>
        </div>

        <div className="newsletter-right">
          <p className="small">I'M INTERESTED IN:</p>
          <label>
            <input type="radio" name="interest" /> Mining
          </label>
          <label>
            <input type="radio" name="interest" /> Energy
          </label>
        </div>
      </div>

      <div className="email-row">
        <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
        <button aria-label="Submit email">→</button>
      </div>

      <div className="links">
        <div>
          <h4>ABOUT</h4>
          <a>About Us</a>
          <a>Careers</a>
          <a>Responsibility</a>
          <a>Press & Media</a>
          <a>Headquarters</a>
          <a>Mine Finder</a>
          <a>A Mining Brand</a>
        </div>

        <div>
          <h4>CUSTOMER CARE</h4>
          <a>Contact Us</a>
          <a>Help Center</a>
          <a>Payment</a>
          <a>Shipping</a>
          <a>Returns</a>
          <a>Care Guide</a>
          <a>Track Order</a>
          <a>Beware of Fraudulent Websites</a>
        </div>

        <div>
          <h4>ACCOUNT</h4>
          <a>Sign In</a>
          <a>Register</a>
          <a>Membership</a>
          <a>Newsletter Settings</a>
        </div>

        <div>
          <h4>LEGAL</h4>
          <a>Terms & Conditions</a>
          <a>Cookie Policy</a>
          <a>Cookie Settings</a>
          <a>Privacy Policy</a>
          <a>Do Not Sell My Personal Information</a>
          <a>Whistleblowing</a>
          <a>General Product Safety Regulation</a>
        </div>

        <div>
          <h4>POPULAR CATEGORIES</h4>
          <a>New Arrivals Mining</a>
          <a>New Arrivals Energy</a>
          <a>Mines</a>
          <a>Turbines</a>
          <a>Logistics</a>
        </div>

        <div className="social">
          <h4>FOLLOW US</h4>
          <div className="icons">
            <span>
              <img src="instagram.svg" alt="" className="icon" />
            </span>
            <span>
              <img src="facebook.svg" alt="" className="icon" />
            </span>
            <span>
              <img src="t.svg" alt="" className="icon" />
            </span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <span className="brand">Future Mining</span>
        <span>© 2025. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
