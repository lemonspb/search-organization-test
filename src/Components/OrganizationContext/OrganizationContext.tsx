import React from "react";
import Serviсes from '../../Serviсes/fetch';


export const OrganizationContext = React.createContext({
  serviсes: new Serviсes()
});

export interface Props {
  children: React.ReactNode
}

export const OrganizationProvider: React.FC<Props> = (children) => {

  const serviсes = new Serviсes()

  return (
    <OrganizationContext.Provider
      value={{
        serviсes
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};