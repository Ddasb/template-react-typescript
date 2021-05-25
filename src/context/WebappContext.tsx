import React, { createContext, Context } from "react";

export const WebappContext: Context<{
  context: null;
}> = createContext({
  context: null,
});

const WebappProvider: React.FC = ({ children }) => {
  const context = null;

  return (
    <WebappContext.Provider value={{ context }}>
      {children}
    </WebappContext.Provider>
  );
};

export default WebappProvider;
