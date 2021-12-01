import React from "react";
import style from "./Login.module.css";
import google from "../../Images/google.png";

const Login = () => {
  return (
    <div className={style.body}>
      <div className={style.card}>
        <h1>Login/Signup</h1>
        <button>
          <img src={google} className={style.googleImg} alt="" />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
