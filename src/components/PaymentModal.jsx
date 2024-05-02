import React, { useState } from 'react';


function PaymentModal() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 mt-16" style={{ maxHeight: '100%', overflowY: 'scroll' }}>
          <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px'}}>
            <div className="w-full pt-1 pb-5">
              <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-16 h-16 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-badge" onClick={handleClose}>
              FERMER
            </button>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase">Informations de paiement sécurisées</h1>
            </div>
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label htmlFor="type1" className="flex items-center cursor-pointer">
                  <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                  <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" alt="card-type" className="h-8 ml-3" />
                </label>
              </div>
              <div className="px-2">
                <label htmlFor="type2" className="flex items-center cursor-pointer">
                  <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                  <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" alt="card-type" className="h-8 ml-3" />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Nom sur la carte</label>
              <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="John Smith" 
                type="text" />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Numéro de carte</label>
              <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="0000 0000 0000 0000" 
                type="text" />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Date d’expiration</label>
                <div>
                  <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="01">01 - Janvier</option>
                    <option value="02">02 - Fevrier</option>
                    <option value="03">03 - Mars</option>
                    <option value="04">04 - Avril</option>
                    <option value="05">05 - Mai</option>
                    <option value="06">06 - Juin</option>
                    <option value="07">07 - Juillet</option>
                    <option value="08">08 - Août</option>
                    <option value="09">09 - Septembre</option>
                    <option value="10">10 - Octobre</option>
                    <option value="11">11 - Novembre</option>
                    <option value="12">12 - Decembre</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="2020">2024</option>
                  <option value="2021">2025</option>
                  <option value="2022">2026</option>
                  <option value="2023">2027</option>
                  <option value="2024">2028</option>
                  <option value="2025">2029</option>
                  <option value="2026">2030</option>
                  <option value="2027">2031</option>
                  <option value="2028">2032</option>
                  <option value="2029">2033</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">Code de sécurité</label>
              <div>
                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="000" 
                type="text" />
              </div>
            </div>
            <div>
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                <i className="mdi mdi-lock-outline mr-1"></i>PAYER MAINTENANT</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentModal;