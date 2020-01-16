import React from "react";
import Serviсes from '../../Serviсes/fetch';


export const OrganizationContext = React.createContext({
  serviсes: new Serviсes()
});

 interface Props {
  children: React.ReactNode
}

export const OrganizationProvider: React.FC<Props> = (props) => {

  const serviсes = new Serviсes()

  return (
    <OrganizationContext.Provider
      value={{
        serviсes
      }}
    >
      {props.children}
    </OrganizationContext.Provider>
  );
};