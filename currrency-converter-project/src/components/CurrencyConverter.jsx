import React from "react";
import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import InputBox from "./InputBox";

// MAIN COMPONENT: CurrencyConverter
// ============================================

function CurrencyConverter() {
  // ========== STATE MANAGEMENT ==========
  // amount: User jo amount enter karega "From" field mein
  const [amount, setAmount] = useState(1);

  // from: Source currency (jisme convert karna hai se)
  const [from, setFrom] = useState("usd");

  // to: Target currency (jisme convert karna hai)
  const [to, setTo] = useState("inr");

  // convertedAmount: Final converted result
  const [convertedAmount, setConvertedAmount] = useState(0);

  // ========== CUSTOM HOOK CALL ==========
  // "from" currency ke liye conversion rates fetch karo
  // Example: agar from="usd" hai toh currencyInfo = {inr: 83, eur: 0.92, ...}
  const currencyInfo = useCurrencyInfo(from);

  // ========== CURRENCY OPTIONS ==========
  // Object.keys() se saare currency names ka array banao
  // Ye dropdown options mein use hoga
  const currencyOptions = Object.keys(currencyInfo);

  // ========== SWAP FUNCTION ==========
  // "From" aur "To" currencies ko reverse karta hai
  // Amounts ko bhi swap karta hai for smooth UX
  const swap = () => {
    setFrom(to); // to ko from bana do
    setTo(from); // from ko to bana do
    setConvertedAmount(amount); // converted amount ko amount bana do
    setAmount(convertedAmount); // amount ko converted amount bana do
  };

  // ========== CONVERSION FUNCTION ==========
  // Main conversion logic - amount ko multiply karo conversion rate se
  // Formula: Final Amount = Input Amount × Conversion Rate
  const currencyConverterButton = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Page reload mat karo
  //   currencyConverterButton(); // Conversion function call karo
  // };

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">
            💱 Currency Converter
          </h1>
          <p className="text-white/90 text-lg">
            Real-time exchange rates for 150+ currencies
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="border border-white/20 rounded-2xl p-8 backdrop-blur-md bg-white/20 shadow-2xl">
          <div>
            {/* FROM INPUT BOX */}
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount >= 0 ? amount : ""}
                currencyOptions={currencyOptions}
                // Currency change hone pe "from" state update karo
                setCurrencyChange={(currency) => setFrom(currency)}
                // Amount type karne pe "amount" state update karo
                setAmountChange={(amount) => setAmount(amount < 0 ? 0 : amount)}
                selectCurrency={from}
              />
            </div>

            {/* SWAP BUTTON - Centered between two InputBoxes */}
            <div className="relative w-full h-0.5 my-6">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 cursor-pointer hover:scale-110 hover:rotate-180 transition-all duration-300 shadow-lg group"
                title="Swap currencies"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>

            {/* TO INPUT BOX - Amount disabled hai (read-only) */}
            <div className="w-full mb-6">
              <InputBox
                label="To"
                amount={
                  convertedAmount > 0 ? convertedAmount.toFixed(2) : "0.00"
                }
                currencyOptions={currencyOptions}
                // Currency change hone pe "to" state update karo
                setCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                // Input disable hai - user type nahi kar sakta
                amountDisable={true}
              />
            </div>

            {/* CONVERT BUTTON */}
            <button
              onClick={currencyConverterButton}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-4 rounded-xl cursor-pointer hover:from-green-600 hover:to-blue-700 transition-all text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>

          {/* EXCHANGE RATE INFO */}
          {currencyInfo[to] && (
            <div className="mt-6 text-center text-white/90 text-sm bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-medium">
                📊 Exchange Rate: 1 {from.toUpperCase()} ={" "}
                {currencyInfo[to].toFixed(4)} {to.toUpperCase()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
