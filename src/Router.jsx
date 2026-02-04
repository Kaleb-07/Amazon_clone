import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auto from "./Pages/Auto/Auto";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Result from "./Pages/Results/Result";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe("pk_test_51Siwma9q7LlmNJLKSVB3g3tePjDO2Am5HjK63RfQuSKj6HYBQ0E4nAdS6IK1XIGeDRm7aEjbMvWVrSzV0KMddYJz00I87RZiSg");

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/payment" element={
          <ProtectedRoute msg={"you must log in to pay"} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
        />
        <Route path="/orders" element={
          <ProtectedRoute msg={"you must log in to access your orders"} redirect={"/orders"}>
            <Elements stripe={stripePromise}>
              <Orders />
            </Elements>
          </ProtectedRoute>
        }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/:product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
