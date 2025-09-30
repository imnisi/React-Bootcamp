import React, { useState, useEffect} from 'react';

// ============================================
// CUSTOM HOOK: useCurrencyInfo
// ============================================
// Ye hook currency conversion rates fetch karta hai API se
// Parameter: currency (jaise "usd", "inr")
// Return: Object with conversion rates for all currencies

function useCurrencyInfo(currency) {
  // State: API se aaya hua data store karne ke liye
  const [data, setData] = useState({});
  
  // Effect: Jab bhi currency change ho, naya data fetch karo
  useEffect(() => {
    // API endpoint - dynamic currency ke saath
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Response ko JSON mein convert karo
      .then((res) => setData(res[currency])); // Specific currency data store karo
  }, [currency]); // Dependency: currency change hone pe re-run hoga

  return data; // Conversion rates return karo
}

export default useCurrencyInfo;
