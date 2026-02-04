import React, { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider.jsx";
import { Link } from "react-router-dom";
import Classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { IoSearch } from "react-icons/io5";
import { SlBasket, SlLocationPin } from "react-icons/sl";
import { signOut } from "firebase/auth";
import { auth } from "../../Utility/firebase.js"; // ✅ correct import

function Header() {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const handleLogout = () => {
    signOut(auth).catch((err) => console.error(err));
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
          <div className={Classes.delivery}>
            <SlLocationPin />
            <div>
              <span>Deliver to</span>
              <span>Your Location</span>
            </div>
          </div>
        </div>

        {/* Middle: Search */}
        <div className={Classes.search_section}>
          <select className={Classes.category_select}>
            <option value="">All Departments</option>
            <option value="electronics">Electronics</option>
            <option value="computers">Computers</option>
            <option value="smart-home">Smart Home</option>
            <option value="arts-crafts">Arts & Crafts</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className={Classes.search_input}
          />
          <button className={Classes.searchButton}>
            <IoSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className={Classes.right_section}>
          {/* Language Selector */}
          <div className={Classes.language_selector}>
            <div className={Classes.lang_option}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
                width="24"
              />
              <span>EN</span>
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
                <p>Hello, Sign in</p>
                <span>Account & Lists</span>
              </Link>
            )}
          </div>

          {/* Orders */}
          <Link to="/orders">
            <div className={Classes.orders}>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={Classes.cart}>
            <div className={Classes.cart_icon_container}>
              <SlBasket />
              <span className={Classes.cart_count}>{totalItem}</span>
            </div>
            <span className={Classes.cart_text}>Cart</span>
          </Link>
        </div>
      </section>

      {/* Lower Header */}
      <LowerHeader />
    </section>
  );
}

export default Header;
