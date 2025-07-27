import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [menu, setMenu] = useState("shop");

  return (
    <NavContext.Provider value={{ menu, setMenu }}>
      {children}
    </NavContext.Provider>
  );
};