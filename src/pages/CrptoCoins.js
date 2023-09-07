import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const Crypto = createContext();

export const CryptoState = () => {
  return useContext(Crypto);
};

const CrptoCoins = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    if (currency === "USD") setSymbol("$");
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CrptoCoins;
