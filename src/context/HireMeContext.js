import { createContext, useState } from "react";

const HireMeContext = createContext();

export const HireMeProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <HireMeContext.Provider value={{ open, setOpen }}>
      {children}
    </HireMeContext.Provider>
  );
};

export default HireMeContext;
