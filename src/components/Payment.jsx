import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  const handleToken = async (token) => {
    console.log(token);
    try {
      await axios.post("http://localhost:9000/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 1000,
        },
      });
      alert("Paiement réussi");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }} className="App">
      <StripeCheckout
        stripeKey="pk_test_51PDLA2EgcFAk8EMaZAjfsWWv3WvY1isbeIziDZEXbBpSbUzx30SBEh9AeYFSBDNG0B4V6efLxCLfBYUWPcYGJu3o00l8HuXuQY"
        token={handleToken}
        amount={1000}
        name="Abonnement Gold"
        description="Abonnement mensuel"
      >
        <button style={{ padding: "10px" }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">S'abonner</button>
      </StripeCheckout>
    </div>
  );
}

export default Payment;
