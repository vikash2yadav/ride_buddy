import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import InputBox from "../../components/form/InputBox";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
  });
  const [paypalEmail, setPaypalEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [confirmBankAccount, setConfirmBankAccount] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaypalChange = (e) => {
    setPaypalEmail(e.target.value);
  };

  const handleCreditCardChange = (e) => {
    setCreditCard(e.target.value);
  };

  const handleBankAccountChange = (e) => {
    setBankAccount(e.target.value);
  };

  const handleConfirmBankAccountChange = (e) => {
    setConfirmBankAccount(e.target.value); 
  };

  const handleIfscChange = (e) => {
    setIfsc(e.target.value); 
  };

  const handleAccountHolderNameChange = (e) => {
    setAccountHolderName(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation based on the selected payment method
    if (paymentMethod === "PayPal" && !paypalEmail) {
      alert("Please enter your PayPal email.");
      return;
    }

    if (paymentMethod === "Bank Transfer" && !bankAccount) {
      alert("Please enter your bank account number.");
      return;
    }

    alert("Order placed successfully!");
  };

   useEffect(()=> {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Add smooth scroll animation
        });
      }, []);
      
  return (
    <>
      <Header />

      <div className="bg-white shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Payment Method */}
            <div>
              <p className="text-lg text-gray-800 font-semibold mb-4">
                Payment Method
              </p>
              <div className="flex justify-start items-center gap-4 flex-wrap">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Credit Card"
                    checked={paymentMethod === "Credit Card"}
                    onChange={() => setPaymentMethod("Credit Card")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Credit Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Debit Card"
                    checked={paymentMethod === "Debit Card"}
                    onChange={() => setPaymentMethod("Debit Card")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Debit Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === "PayPal"}
                    onChange={() => setPaymentMethod("PayPal")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">PayPal</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash"
                    checked={paymentMethod === "Cash"}
                    onChange={() => setPaymentMethod("Cash")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Cash</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank Transfer"
                    checked={paymentMethod === "Bank Transfer"}
                    onChange={() => setPaymentMethod("Bank Transfer")}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Bank Transfer</span>
                </label>
              </div>
            </div>

            {/* Conditional rendering for card details */}
            {(paymentMethod === "Credit Card" ||
              paymentMethod === "Debit Card") && (
              <div>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <InputBox
                    type="text"
                    className="md:w-80 w-full"
                    label="Card Number"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                  <InputBox
                    type="text"
                    className="md:w-80 w-full"
                    label="CVV"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            )}

            {/* Conditional rendering for PayPal email */}
            {paymentMethod === "PayPal" && (
              <div className="mt-6">
                <InputBox
                  type="email"
                  className="md:w-80 w-full"
                  label="PayPal Email"
                  name="paypalEmail"
                  value={paypalEmail}
                  onChange={handlePaypalChange}
                  placeholder="youremail@paypal.com"
                  required
                />
              </div>
            )}

            {/* Conditional rendering for Bank Account number */}
            {paymentMethod === "Bank Transfer" && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label="Bank Account Number"
                  name="bankAccount"
                  value={bankAccount}
                  onChange={handleBankAccountChange}
                  placeholder="0000000000000000"
                  required
                />
                  <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label="Confirm Bank Account Number"
                  name="confirmBankAccount"
                  value={confirmBankAccount}
                  onChange={handleConfirmBankAccountChange}
                  placeholder="0000000000000000"
                  required
                />
                <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label="IFSC code"
                  name="ifsc"
                  value={ifsc}
                  onChange={handleIfscChange}
                  placeholder="ABC12039304"
                  required
                />
                   <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label="Account Holder Name"
                  name="accountHolderName"
                  value={accountHolderName}
                  onChange={handleAccountHolderNameChange}
                  placeholder="Vikash R Yadav"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="text-right">
              <button className="px-12 py-3 rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
