import React, { useContext, useMemo } from 'react';
import Classes from './Cart.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import ProductCart from '../../components/Product/ProductCard.jsx';
import { DataContext } from '../../components/DataProvider/DataProvider.jsx';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat.jsx';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type.js';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // ✅ Calculate subtotal and total items
  const { total, totalItems } = useMemo(() => {
    return basket.reduce(
      (acc, item) => {
        acc.total += Number(item.price) * item.amount;
        acc.totalItems += item.amount;
        return acc;
      },
      { total: 0, totalItems: 0 }
    );
  }, [basket]);

    const increment = (item) => {
      dispatch({ type: Type.ADD_TO_BASKET, item });
    };

    const decrement = (id) => {
      dispatch({ type: Type.REMOVE_FROM_BASKET, id });
    };

  return (
    <Layout>
      <section className={Classes.container}>
        {/* LEFT */}
        <div className={Classes.cart_container}>
          <h2>Hello {user?.email}</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            basket.map((item) => (
              <section key={item.id} className={Classes.cart_product}>
                <ProductCart
                  product={item}
                  renderDesc
                  renderAdd={false}
                  flex
                />

                <div className={Classes.btn_container}>
                  <button
                    className={Classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>

                  <span>{item.amount}</span>

                  <button
                    className={Classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {/* RIGHT */}
        {basket.length > 0 && (
          <div className={Classes.subtotal}>
            <div>
              <p>Subtotal ({totalItems} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />{' '}
              <small>This order contains a gift</small>
            </span>

            <Link to="/payment" className={Classes.checkout_btn}>
              Continue to Checkout
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
