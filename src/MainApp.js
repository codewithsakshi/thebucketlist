import React, { useState } from 'react';

import UserContext from './Component/UserContext/UserContext';
import App from './App';

export default function MainApp() {
  const [authUser, setAuthUser] = useState(null);
  const changeAuthUser = (newAuthUser) => {
    setAuthUser(newAuthUser);
  };

  return (
    <UserContext.Provider value={{ authUser, changeAuthUser }}>
      <App />
    </UserContext.Provider>
  );
}
