import React, { useId } from "react";

// COMPONENT: InputBox
// ============================================
// Reusable component - amount input aur currency selector ke liye
// Props explanation:
// - label: Field ka title ("From" ya "To")
// - amount: Display hone wala amount
// - setAmountChange: Function to update amount when user types
// - setCurrencyChange: Function to update selected currency
// - currencyOptions: Array of available currencies
// - selectCurrency: Currently selected currency
// - amountDisable: Input field disable karne ke liye
// - currencyDisable: Dropdown disable karne ke liye

function InputBox({
  label,
  amount,
  setAmountChange,
  setCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Unique ID generate karna - accessibility ke liye (label-input connection)
  const amountInputId = useId();
  
  return (
    <div className={`bg-white/90 backdrop-blur-sm p-4 rounded-xl text-sm flex shadow-lg border border-gray-200 ${className}`}>
      {/* LEFT SIDE: Amount Input */}
      <div className="w-1/2 pr-2">
        <label
          className="text-gray-600 mb-2 inline-block font-medium text-xs uppercase tracking-wide"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 text-2xl font-semibold text-gray-800"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          // onChange: User type kare toh parent component ko update karo
          // Optional chaining (&&) - agar function exist kare tabhi call karo
          onChange={(e) =>
            setAmountChange && setAmountChange(Number(e.target.value))
          }
        />
      </div>
      
      {/* RIGHT SIDE: Currency Selector */}
      <div className="w-1/2 flex flex-wrap justify-end text-right pl-2 border-l border-gray-300">
        <p className="text-gray-600 mb-2 w-full font-medium text-xs uppercase tracking-wide">
          Currency Type
        </p>
        <select
          className="rounded-lg px-3 py-2 bg-blue-50 cursor-pointer outline-none font-semibold text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
          value={selectCurrency}
          // onChange: Currency change hone pe parent ko notify karo
          onChange={(e) => {
            setCurrencyChange && setCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {/* All available currencies ko map karke options banao */}
          {currencyOptions.map((currencyValue) => (
            <option key={currencyValue} value={currencyValue}>
              {currencyValue.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
