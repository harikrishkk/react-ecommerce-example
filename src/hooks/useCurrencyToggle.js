import React, { useState } from "react";

const useCurrencyToggle = (props) => {
  const [currency, setCurrency] = useState("CAD");
  const toggleCurrency = () => {
    setCurrency(currency === "CAD" ? "INR" : "CAD");
  };
  return { currency, toggleCurrency };
};

export default useCurrencyToggle;
