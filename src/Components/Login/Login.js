import React from "react";
import style from "./Login.module.css";
import google from "../../Images/google.png";
import firebaseApp from "../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setAuth } from "../../Store/authSlice";
import { useHistory } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(setAuth({ user, token }));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.body}>
      <div className={style.card}>
        <h1>Login/Signup</h1>
        <button onClick={signInWithGoogle}>
          <img src={google} className={style.googleImg} alt="" />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
