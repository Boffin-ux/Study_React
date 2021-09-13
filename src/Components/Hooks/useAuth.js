import { useEffect, useState } from "react";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const useAuth = (authFirebase) => {
   const [authentication, setAuthentication] = useState(null);

   const provider = new GoogleAuthProvider();
   const auth = authFirebase();

   const logIn = () => signInWithPopup(auth, provider);
   const logOut = () => signOut(auth);

   useEffect(() => {
      auth.onAuthStateChanged(user => {
         if (user) {
            setAuthentication(user);
         } else {
            setAuthentication(null);
         }
      });
   }, [auth, authentication]);
   return { authentication, logIn, logOut };
};