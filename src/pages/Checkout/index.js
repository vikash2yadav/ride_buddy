import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import InputBox from "../../components/form/InputBox";
import { CommonContext } from "../../context/CommonContext";
import { useParams } from "react-router-dom";
import { VehicleContext } from "../../context/VehicleContext";
import BasicDatePicker from "../../components/DatePicker";

const Checkout = () => {
  const params = useParams();
  const { currentLangCode } = useContext(CommonContext);
  const { getVehicleDetail, vehicleData } = useContext(VehicleContext);
  const [durationType, setDurtionType] = useState("hour");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [perHour, setPerHour] = useState("1");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
  });
  const [paypalEmail, setPaypalEmail] = useState("");
  const [setCreditCard] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [confirmBankAccount, setConfirmBankAccount] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [startDate, setStartDate] = useState();

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

  const handleDateChange = (newValue) => {
    setStartDate(newValue);
  };

  useEffect(() => {
    getVehicleDetail(params?.id);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);

  return (
    <>
      <Header />

      <div className="bg-white  shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <p className="text-lg text-gray-800 font-semibold mb-4">
            {currentLangCode === "hn"
              ? "भुगतान विधि"
              : currentLangCode === "guj"
              ? "ચુકવણી પદ્ધતિ"
              : "Select Durations"}
          </p>

          <div className="flex justify-start items-center gap-4 flex-wrap">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="durationType"
                value="hour"
                checked={durationType === "hour"}
                onChange={() => setDurtionType("hour")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-800">
                {currentLangCode === "hn"
                  ? "एक घंटे भर के लिए"
                  : currentLangCode === "guj"
                  ? "એક કલાક માટે "
                  : "For One hour"}
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="durationType"
                value="day"
                checked={durationType === "day"}
                onChange={() => setDurtionType("day")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-800">
                {currentLangCode === "hn"
                  ? "एक दिन के लिए"
                  : currentLangCode === "guj"
                  ? "એક દિવસ માટે"
                  : "For One Day"}
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="durationType"
                value="week"
                checked={durationType === "week"}
                onChange={() => setDurtionType("week")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-800">
                {currentLangCode === "hn"
                  ? "एक सप्ताह के लिए"
                  : currentLangCode === "guj"
                  ? "એક અઠવાડિયા માટે"
                  : "For One Week"}
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="durationType"
                value="month"
                checked={durationType === "month"}
                onChange={() => setDurtionType("month")}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-800">
                {currentLangCode === "hn"
                  ? "एक महीने के लिए"
                  : currentLangCode === "guj"
                  ? "એક મહિના માટે"
                  : "For One Month"}
              </span>
            </label>
          </div>

          {/* Conditional rendering */}
          {durationType === "hour" && (
            <div>
              <div className="grid grid-cols-1 gap-4 mt-6">
                <BasicDatePicker
                  label={"Enter date"}
                  name="satrt_date"
                  value={startDate}
                  onChange={handleDateChange}
                />
              </div>

             {
              startDate && (
                <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="flex flex-col justify-start gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="perHour"
                      value="1"
                      checked={perHour === "1"}
                      onChange={() => setPerHour("1")}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2 text-gray-800">
                      12 AM - 1 AM
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="perHour"
                      value="2"
                      checked={perHour === "2"}
                      onChange={() => setPerHour("2")}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2 text-gray-800">
                      1 AM - 2 AM
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="perHour"
                      value="3"
                      checked={perHour === "3"}
                      onChange={() => setPerHour("3")}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2 text-gray-800">
                      2 AM - 3 AM
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="perHour"
                      value="4"
                      checked={perHour === "4"}
                      onChange={() => setPerHour("4")}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2 text-gray-800">
                      3 AM - 4 AM
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="perHour"
                      value="5"
                      checked={perHour === "5"}
                      onChange={() => setPerHour("5")}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2 text-gray-800">
                      4 AM - 5 AM
                    </span>
                  </label>
                </div>
              </div>
              )
             }
            </div>
          )}
        </div>

        <div className="max-w-full mx-auto px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Payment Method */}
            <div>
              <p className="text-lg text-gray-800 font-semibold mb-4">
                {currentLangCode === "hn"
                  ? "भुगतान विधि"
                  : currentLangCode === "guj"
                  ? "ચુકવણી પદ્ધતિ"
                  : "Payment Method"}
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
                  <span className="ml-2 text-gray-800">
                    {currentLangCode === "hn"
                      ? "क्रेडिट कार्ड"
                      : currentLangCode === "guj"
                      ? "ક્રેડિટ કાર્ડ"
                      : "Credit Card"}
                  </span>
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
                  <span className="ml-2 text-gray-800">
                    {currentLangCode === "hn"
                      ? "डेबिट कार्ड"
                      : currentLangCode === "guj"
                      ? "ડેબિટ કાર્ડ"
                      : "Debit Card"}
                  </span>
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
                  <span className="ml-2 text-gray-800">
                    {currentLangCode === "hn"
                      ? "पेपैल"
                      : currentLangCode === "guj"
                      ? "પેપાલ"
                      : "PayPal"}
                  </span>
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
                  <span className="ml-2 text-gray-800">
                    {currentLangCode === "hn"
                      ? "नकद"
                      : currentLangCode === "guj"
                      ? "રોકડ"
                      : "Cash"}
                  </span>
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
                  <span className="ml-2 text-gray-800">
                    {currentLangCode === "hn"
                      ? "बैंक ट्रांसफर"
                      : currentLangCode === "guj"
                      ? "બેંક ટ્રાન્સફર"
                      : "Bank Transfer"}
                  </span>
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
                    label={
                      currentLangCode === "hn"
                        ? "कार्ड संख्या"
                        : currentLangCode === "guj"
                        ? "કાર્ડ નંબર"
                        : "Card Number"
                    }
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                  <InputBox
                    type="text"
                    className="md:w-80 w-full"
                    label={
                      currentLangCode === "hn"
                        ? "સીવીવી"
                        : currentLangCode === "guj"
                        ? "सीवीवी"
                        : "CVV"
                    }
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
                  label={
                    currentLangCode === "hn"
                      ? "पेपैल ईमेल"
                      : currentLangCode === "guj"
                      ? "પેપાલ ઈમેલ"
                      : "PayPal Email"
                  }
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
                  label={
                    currentLangCode === "hn"
                      ? "बैंक खाता संख्या"
                      : currentLangCode === "guj"
                      ? "બેંક એકાઉન્ટ નંબર"
                      : "Bank Account Number"
                  }
                  name="bankAccount"
                  value={bankAccount}
                  onChange={handleBankAccountChange}
                  placeholder="0000000000000000"
                  required
                />
                <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label={
                    currentLangCode === "hn"
                      ? "बैंक खाता संख्या की पुष्टि करें"
                      : currentLangCode === "guj"
                      ? "બેંક એકાઉન્ટ નંબરની પુષ્ટિ કરો"
                      : "Confirm Bank Account Number"
                  }
                  name="confirmBankAccount"
                  value={confirmBankAccount}
                  onChange={handleConfirmBankAccountChange}
                  placeholder="0000000000000000"
                  required
                />
                <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label={
                    currentLangCode === "hn"
                      ? "IFSC कोड"
                      : currentLangCode === "guj"
                      ? "IFSC કોડ"
                      : "IFSC code"
                  }
                  name="ifsc"
                  value={ifsc}
                  onChange={handleIfscChange}
                  placeholder="ABC12039304"
                  required
                />
                <InputBox
                  type="text"
                  className="md:w-80 w-full"
                  label={
                    currentLangCode === "hn"
                      ? "खाता धारक का नाम"
                      : currentLangCode === "guj"
                      ? "એકાઉન્ટ ધારકનું નામ"
                      : "Account Holder Name"
                  }
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
                {currentLangCode === "hn"
                  ? "आदेश की पुष्टि"
                  : currentLangCode === "guj"
                  ? "ઓર્ડરની પુષ્ટિ કરો"
                  : "Confirm Order"}
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
