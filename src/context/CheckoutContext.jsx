import { createContext, useContext } from "react";

const CheckoutContext = createContext();

function CheckoutProvider({ children }) {
  const checkoutDestinations = [];
  const checkoutTours = [];

  return (
    <CheckoutContext.Provider
      value={{
        checkoutDestinations,
        checkoutTours,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined)
    throw new Error("CheckoutContext was used outside the CheckoutProvider");
  return context;
}

export { CheckoutProvider, useCheckout };
