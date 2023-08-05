import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./payment";

const stripePromise = loadStripe(
  "pk_test_51NZRltSHtsqCzqzbjn6wv7JkgfIMlJ7WMREgNSogNyOexJ9mSDKYhP6WFKdtvWYgjg1CjssaktuPNtHg1LZGzxt900qqYkTqIa"
);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default App;
