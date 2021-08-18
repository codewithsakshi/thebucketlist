import React from 'react';

const FirebaseContext = React.createContext({
  authUser: null,
  changeAuthUser: () => {},
});

export default FirebaseContext;
