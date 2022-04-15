import React, { Children } from "react";
import Context from "./Context";
import useStorage from "./useStorage";

import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
