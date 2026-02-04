import React from "react";
import './Footer.css';

function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer_outer_container">
      {/* 1. Personalized Recommendations (Simplified) */}
      <div className="footer_recommendations">
        <div className="recommendations_inner">
          <hr className="footer_divider" />
          <p>See personalized recommendations</p>
          <button className="signin_button">Sign in</button>
          <p className="new_customer">New customer? <a href="#">Start here.</a></p>
          <hr className="footer_divider" />
        </div>
      </div>

      {/* 2. Back to Top */}
      <div className="back_to_top" onClick={backToTop}>
        Back to top
      </div>

      {/* 3. Middle Footer (Nav Columns) */}
      <div className="footer_middle">
        <div className="footer_column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Press Center</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr className="footer_line" />

      {/* 4. Bottom Branding */}
      <div className="footer_branding">
        <div className="footer_logo_container">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
        </div>
        <div className="footer_selectors">
          <div className="selector_box">English</div>
          <div className="selector_box">$ USD - U.S. Dollar</div>
          <div className="selector_box">United States</div>
        </div>
      </div>

      {/* 5. Bottom Gray Footer (Copyright/Links) */}
      <div className="footer_bottom">
        <div className="bottom_links">
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Consumer Health Data Privacy Disclosure</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <p>© 1996-2024, AmazonClone.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
