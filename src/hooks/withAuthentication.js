import React, { useContext, useEffect } from 'react';
import FirebaseContext from '../firebase/FirebaseContext';
import UserContext from '../Component/UserContext/UserContext';

const saveToLocalStorage = (authUser) => {
  localStorage.setItem('authUser', JSON.stringify(authUser));
};

export default function withAuthentication(Component) {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    const user = useContext(UserContext);

    const next = (authUser) => {
      console.log('Auth User:: 1', authUser);
      saveToLocalStorage(authUser);
      user.changeAuthUser(authUser);
    };

    const fallback = () => {
      localStorage.removeItem('authUser');
      user.changeAuthUser(null);
    };

    useEffect(() => {
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      user.changeAuthUser(authUser);
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    return <Component {...props} />;
  };

  return NewComponent;
}
