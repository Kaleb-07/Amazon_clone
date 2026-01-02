import React, { useContext, useState, useMemo } from 'react';
import Classes from './Payment.module.css';
import LayOut from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from '../../components/Product/ProductCard';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { BsCreditCard } from 'react-icons/bs';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { Type } from "../../Utility/action.type"; // ✅ FIX

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const { total, totalItems } = useMemo(() => {
    return (basket || []).reduce(
      (acc, item) => {
        acc.total += Number(item.price) * item.amount;
        acc.totalItems += item.amount;
        return acc;
      },
      { total: 0, totalItems: 0 }
    );
  }, [basket]);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCardError(e.error ? e.error.message : "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (!user) {
      setCardError("You must be logged in to pay.");
      return;
    }

    try {
      setProcessing(true);
      setCardError(null);

      const totalInCents = Math.round(total * 100);

      const response = await axiosInstance.post(
        `/payments/create?total=${totalInCents}`
      );

      const clientSecret = response.data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setCardError(result.error.message);
        setProcessing(false);
        return;
      }

      const paymentIntent = result.paymentIntent;

      await setDoc(
        doc(db, "users", user.uid, "orders", paymentIntent.id),
        {
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        }
      );

      dispatch({ type: Type.EMPTY_BASKET }); // ✅ now works
      setProcessing(false);
      navigate("/orders", { state: { msg: "You have placed a new order" } });

    } catch (err) {
      console.error(err);
      setCardError("Something went wrong, please try again.");
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className={Classes.payment_header}>
        CheckOut ({totalItems}) items
      </div>

      <section className={Classes.payment}>
        {/* Delivery Address */}
        <div className={Classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>

        <hr />

        {/* Review Items */}
        <div className={Classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map(item => (
              <ProductCard key={item.id} product={item} flex />
            ))}
          </div>
        </div>

        <hr />

        {/* Payment */}
        <div className={Classes.flex}>
          <h3><BsCreditCard /> Payment Method</h3>
          <div className={Classes.payment_card_container}>
            <form onSubmit={handlePayment}>
              {cardError && <small style={{ color: "red" }}>{cardError}</small>}

              <CardElement onChange={handleChange} />

              <div className={Classes.payment_price}>
                <span>
                  <p>Total Order |</p>
                  <CurrencyFormat amount={total} />
                </span>

                <button type="submit" disabled={processing || !stripe}>
                  {processing ? (
                    <div className={Classes.loading}>
                      <ClipLoader size={12} />
                      <p>Please Wait...</p>
                    </div>
                  ) : "Pay Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
