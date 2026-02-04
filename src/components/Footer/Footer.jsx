import React, { useContext } from "react";
import './Footer.css';
import { DataContext } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";
import { translations } from "../../Utility/translations";
import { Type } from "../../Utility/action.type";

function Footer() {
  const [{ user, language }, dispatch] = useContext(DataContext);
  const t = translations[language?.code] || translations.EN;

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const changeLanguage = (langObj) => {
    dispatch({
      type: Type.SET_LANGUAGE,
      language: langObj
    });
  };

  return (
    <div className="footer_outer_container">
      {/* 1. Personalized Recommendations (Dynamic & Functional) */}
      {!user && (
        <div className="footer_recommendations">
          <hr className="footer_divider" />
          <div className="recommendations_inner">
            <p>{t.personalized_rec}</p>
            <Link to="/auto">
              <button className="signin_button">{t.signin}</button>
            </Link>
            <p className="new_customer">{t.new_customer} <Link to="/auto">{t.start_here}</Link></p>
          </div>
          <hr className="footer_divider" />
        </div>
      )}

      {/* 2. Back to Top */}
      <div className="back_to_top" onClick={backToTop}>
        {t.back_to_top}
      </div>

      {/* 3. Middle Footer (Nav Columns with project links) */}
      <div className="footer_middle">
        <div className="footer_column">
          <h3>{t.get_to_know}</h3>
          <ul>
            <li>{t.careers}</li>
            <li>{t.blog}</li>
            <li>{t.about}</li>
            <li>{t.sustainability}</li>
            <li>{t.press}</li>
            <li>{t.investor}</li>
            <li>{t.devices}</li>
            <li>{t.science}</li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>{t.make_money}</h3>
          <ul>
            <li>{t.sell_on_amazon}</li>
            <li>{t.sell_apps}</li>
            <li>{t.become_affiliate}</li>
            <li>{t.advertise}</li>
            <li>{t.self_publish}</li>
            <li>{t.host_hub}</li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>{t.payment_products}</h3>
          <ul>
            <li>{t.business_card}</li>
            <li>{t.shop_with_points}</li>
            <li>{t.reload_balance}</li>
            <li>{t.currency_converter}</li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>{t.let_us_help}</h3>
          <ul>
            <li>{t.covid19}</li>
            <li><Link to="/auto">{t.your_account}</Link></li>
            <li><Link to="/orders">{t.your_orders}</Link></li>
            <li>{t.shipping_rates}</li>
            <li>{t.returns_replacements}</li>
            <li>{t.help}</li>
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
          <div className="selector_box language_box">
            <span>{language?.name}</span>
            <div className="footer_lang_dropdown">
              <p onClick={() => changeLanguage({ code: "EN", name: "English", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" })}>English</p>
              <p onClick={() => changeLanguage({ code: "ES", name: "Español", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" })}>Español</p>
              <p onClick={() => changeLanguage({ code: "AR", name: "العربية", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" })}>العربية</p>
            </div>
          </div>
          <div className="selector_box country_box">
            <img src={t.country_flag} alt={t.country} />
            <span>{t.country}</span>
          </div>
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
          <span>{t.conditions_use}</span>
          <span>{t.privacy_notice}</span>
          <span>Consumer Health Data Privacy Disclosure</span>
          <span>{t.ads_choices}</span>
        </div>
        <p>© 1996-2024, AmazonClone.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
