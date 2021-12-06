import MarketCreate from "../../../../src/components/units/market/create/MarketCreate.container";
import { createContext } from "react";

export const Context = createContext({});

export default function MarketEditItemPage() {
  const values = {
    isEdit: true,
  };
  return (
    <Context.Provider value={values}>
      <MarketCreate />
    </Context.Provider>
  );
}
