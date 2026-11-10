import { createContext, useState } from "react";

export const AppStore = createContext();

export const ContextFunction = ({ children }) => {

  const [productsData, setProductsData] = useState([]);
  const [cartData, setCartData] = useState([]);

  return (
    <AppStore.Provider value={{ productsData, setProductsData, cartData, setCartData }}>
      {children}
    </AppStore.Provider>
  );
};
