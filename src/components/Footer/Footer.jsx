import React, { useContext } from "react";
import './Footer.css';
import { DataContext } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";

function Footer() {
  const [{ user }] = useContext(DataContext);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer_outer_container">
      {/* 1. Personalized Recommendations (Dynamic & Functional) */}
      {!user && (
        <div className="footer_recommendations">
          <div className="recommendations_inner">
            <hr className="footer_divider" />
            <p>See personalized recommendations</p>
            <Link to="/auto">
              <button className="signin_button">Sign in</button>
            </Link>
            <p className="new_customer">New customer? <Link to="/auto">Start here.</Link></p>
            <hr className="footer_divider" />
          </div>
        </div>
      )}

      {/* 2. Back to Top */}
      <div className="back_to_top" onClick={backToTop}>
        Back to top
      </div>

      {/* 3. Middle Footer (Nav Columns with project links) */}
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
            <li><Link to="/auto">Your Account</Link></li>
            <li><Link to="/orders">Your Orders</Link></li>
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
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
          </Link>
        </div>
        <div className="footer_selectors">
          <div className="selector_box">English</div>
          <div className="selector_box">$ USD - U.S. Dollar</div>
          <div className="selector_box">United States</div>
        </div>
      </div>

      {/* 5. Detailed Services Grid */}
      <div className="footer_services">
        <div className="services_grid">
          <div className="service_item"><span>Amazon Music</span><p>Stream millions of songs</p></div>
          <div className="service_item"><span>Amazon Ads</span><p>Reach customers</p></div>
          <div className="service_item"><span>6pm</span><p>Score deals on brands</p></div>
          <div className="service_item"><span>AbeBooks</span><p>Books, art & collectibles</p></div>
          <div className="service_item"><span>ACX</span><p>Audiobook Publishing Made Easy</p></div>
          <div className="service_item"><span>Sell on Amazon</span><p>Start a Selling Account</p></div>
          <div className="service_item"><span>Veeqo</span><p>Shipping Software</p></div>

          <div className="service_item"><span>Amazon Business</span><p>Everything For Your Business</p></div>
          <div className="service_item"><span>AmazonFresh</span><p>Groceries & More Right To Your Door</p></div>
          <div className="service_item"><span>AmazonGlobal</span><p>Ship Orders Internationally</p></div>
          <div className="service_item"><span>Home Services</span><p>Experienced Pros Happiness Guarantee</p></div>
          <div className="service_item"><span>Amazon Web Services</span><p>Scalable Cloud Computing Services</p></div>
          <div className="service_item"><span>Audible</span><p>Listen to Books & Original Audio Performances</p></div>
          <div className="service_item"><span>Box Office Mojo</span><p>Find Movie Box Office Data</p></div>

          <div className="service_item"><span>Goodreads</span><p>Book reviews & recommendations</p></div>
          <div className="service_item"><span>IMDb</span><p>Movies, TV & Celebrities</p></div>
          <div className="service_item"><span>IMDbPro</span><p>Get Info Entertainment Professionals Need</p></div>
          <div className="service_item"><span>Kindle Direct Publishing</span><p>Indie Digital & Print Publishing Made Easy</p></div>
          <div className="service_item"><span>Prime Video Direct</span><p>Video Distribution Made Easy</p></div>
          <div className="service_item"><span>Shopbop</span><p>Designer Fashion Brands</p></div>
          <div className="service_item"><span>Woot!</span><p>Deals and Shenanigans</p></div>

          <div className="service_item"><span>Zappos</span><p>Shoes & Clothing</p></div>
          <div className="service_item"><span>Ring</span><p>Smart Home Security Systems</p></div>
          <div className="service_item"><span>eero WiFi</span><p>Stream 4K Video in Every Room</p></div>
          <div className="service_item"><span>Blink</span><p>Smart Security for Every Home</p></div>
          <div className="service_item"><span>Neighbors App</span><p>Real-Time Crime & Safety Alerts</p></div>
          <div className="service_item"><span>Amazon Subscription Boxes</span><p>Top subscription boxes – right to your door</p></div>
          <div className="service_item"><span>PillPack</span><p>Pharmacy Simplified</p></div>
        </div>
      </div>

      {/* 6. Bottom Gray Footer (Copyright/Links) */}
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
