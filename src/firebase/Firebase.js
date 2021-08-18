import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCwp3URbX4_Wt4m4e3TLEouiZ4dsiatg9g',
  authDomain: 'thebucketlist-dfb57.firebaseapp.com',
  projectId: 'thebucketlist-dfb57',
  storageBucket: 'thebucketlist-dfb57.appspot.com',
  messagingSenderId: '187868398062',
  appId: '1:187868398062:web:c43882075164f5cd108eff',
  measurementId: 'G-GHCRL8C4HQ',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();

    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  user = (uid) => this.db.ref(`/users/${uid}`);

  doSignOut = () => this.auth.signOut();

  onAuthChangeListener = (next, fallback = () => {}) => {
    return this.auth.onAuthStateChanged((authUser) => {
      console.log('auth user:: ', authUser);
      if (authUser) {
        const user = {
          uid: authUser.uid,
          email: authUser.email,
          emailVerified: authUser.emailVerified,
        };
        next(user);

        // this.user(authUser.uid)
        //   .once('value')
        //   .then((snapshot) => {
        //     const dbUser = snapshot.val();
        //     const user = {
        //       uid: authUser.uid,
        //       email: authUser.email,
        //       emailVerified: authUser.emailVerified,
        //       ...dbUser,
        //     };
        //     // console.log(`authUser:: listener:: ${user}`);
        //     next(user);
        //   });
      } else {
        // console.log(`Now user is not available`);
        fallback();
      }
    });
  };
}

export default Firebase;
