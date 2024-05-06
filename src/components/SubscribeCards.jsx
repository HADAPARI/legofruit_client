import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

function SubscribeCards({ goldProps, h1GOLD, h2Ariary, h3abonner, buttonColor }) {
  const handleToken = async (token) => {
    console.log(token);
    
  };

  return (
    <div className="flex justify-center space-x-1">
      <div className="card w-52 bg-base-100 shadow-xl">
        <figure>
          <img src={goldProps} className="h-40" alt="gold" />
          <h1 className="block absolute font-bold text-white text-3xl">
            {h1GOLD}
          </h1>
        </figure>
        <div className="card-body p-0 py-6 items-center text-center">
          <h2 className="mt-6 font-bold">{h2Ariary}</h2>
          <div className="card-actions justify-end">
            
            <StripeCheckout
              stripeKey="pk_test_51PDLA2EgcFAk8EMaZAjfsWWv3WvY1isbeIziDZEXbBpSbUzx30SBEh9AeYFSBDNG0B4V6efLxCLfBYUWPcYGJu3o00l8HuXuQY"
              token={handleToken}        
              name="Abonnement Gold"
              description="Abonnement mensuel"
            >
              <button className={h3abonner}>S'abonner</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCards;
