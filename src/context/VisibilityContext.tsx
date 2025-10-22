"use client";

import React from "react";

interface VisibilityContextType {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

interface VisibilityProviderProps {
  children: React.ReactNode;
}

const VisibilityContext = React.createContext<
  VisibilityContextType | undefined
>(undefined);
VisibilityContext.displayName = "Visibility";

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({
  children,
}) => {
  const [visibility, setVisibility] = React.useState<boolean>(true);

  return (
    <VisibilityContext.Provider value={{ visibility, setVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = (): VisibilityContextType => {
  const context = React.useContext(VisibilityContext);
  if (!context) {
    throw new Error(
      "useVisibility deve ser utilizado dentro do VisibilityProvider"
    );
  }
  return context;
};
