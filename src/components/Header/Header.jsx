import React, { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider.jsx";
import { Link } from "react-router-dom";
import Classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { IoSearch } from "react-icons/io5";
import { SlBasket, SlLocationPin } from "react-icons/sl";
import { signOut } from "firebase/auth";
import { auth } from "../../Utility/firebase.js";
import { Type } from "../../Utility/action.type";
import { translations } from "../../Utility/translations";
import LocationModal from "./LocationModal";

function Header() {
  const [{ user, basket, language, category }, dispatch] = useContext(DataContext);
  const [showLocationModal, setShowLocationModal] = React.useState(false);
  const t = translations[language?.code] || translations.EN;

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const handleCategoryChange = (e) => {
    dispatch({
      type: Type.SET_CATEGORY,
      category: e.target.value,
    });
  };

  const handleLogout = () => {
    signOut(auth).catch((err) => console.error(err));
  };

  const changeLanguage = (langObj) => {
    dispatch({
      type: Type.SET_LANGUAGE,
      language: langObj
    });
  };

  return (
    <section className={Classes.fixed}>
      <section className={Classes.header_container}>
        {/* Left: Logo & Delivery */}
        <div className={Classes.left_section}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
              className={Classes.logo}
            />
          </Link>
          <div className={Classes.delivery} onClick={() => setShowLocationModal(true)}>
            <SlLocationPin />
            <div>
              <span>{t.deliver_to}</span>
              <span>{user ? "Ethiopia" : t.location}</span>
            </div>
          </div>
        </div>

        {/* Middle: Search */}
        <div className={Classes.search_section}>
          <select
            className={Classes.category_select}
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">{t.all}</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <input
            type="text"
            placeholder={t.search_placeholder}
            className={Classes.search_input}
          />
          <button className={Classes.searchButton}>
            <IoSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className={Classes.right_section}>
          {/* 🌎 Language Selector Dropdown */}
          <div className={Classes.language_dropdown}>
            <div className={Classes.lang_option}>
              <img
                src={language?.flag}
                alt={language?.code}
              />
              <span>{language?.code}</span>
              <span className={Classes.dropdown_arrow}>▼</span>
            </div>

            {/* Dropdown Content */}
            <div className={Classes.lang_dropdown_content}>
              <div className={Classes.triangle}></div>
              <div className={Classes.lang_list}>
                <div className={Classes.lang_item} onClick={() => changeLanguage({ code: "EN", name: "English", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" })}>
                  <input type="radio" checked={language?.code === "EN"} readOnly />
                  <span>English - EN</span>
                </div>
                <hr />
                <div className={Classes.lang_item} onClick={() => changeLanguage({ code: "ES", name: "Español", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" })}>
                  <input type="radio" checked={language?.code === "ES"} readOnly />
                  <span>Español - ES</span>
                </div>
                <div className={Classes.lang_item} onClick={() => changeLanguage({ code: "AR", name: "العربية", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" })}>
                  <input type="radio" checked={language?.code === "AR"} readOnly />
                  <span>العربية - AR</span>
                </div>
                <hr />
                <div className={Classes.lang_footer}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" />
                  <span>You are shopping on Amazon.com</span>
                </div>
                <div className={Classes.change_country}>Change country/region.</div>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className={Classes.account}>
            {user ? (
              <>
                <p>Hello, {user.email?.split("@")[0]}</p>
                <span onClick={handleLogout} className={Classes.signout_btn}>
                  Sign Out
                </span>
              </>
            ) : (
              <Link to="/auto" className={Classes.login_link}>
                <p>{t.hello_sign_in}</p>
                <span>{t.account_lists}</span>
              </Link>
            )}
          </div>

          {/* Orders */}
          <Link to="/orders">
            <div className={Classes.orders}>
              <p>{t.returns}</p>
              <span>{t.orders}</span>
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={Classes.cart}>
            <div className={Classes.cart_icon_container}>
              <SlBasket />
              <span className={Classes.cart_count}>{totalItem}</span>
            </div>
            <span className={Classes.cart_text}>{t.cart}</span>
          </Link>
        </div>
      </section>

      {/* Lower Header */}
      <LowerHeader />

      {/* Location Modal */}
      <LocationModal
        show={showLocationModal}
        onClose={() => setShowLocationModal(false)}
      />
    </section>
  );
}

export default Header;
