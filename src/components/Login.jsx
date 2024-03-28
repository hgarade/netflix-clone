import React, { useState } from "react";
import LOGIN_BG from "./../assets/login-bg.jpg";

const Login = () => {
  const [isSignInFlow, setIsSignInFlow] = useState(true);

  const toggleSignIn = () => {
    setIsSignInFlow(!isSignInFlow);
  };

  return (
    <div>
      <img
        className="brightness-50 absolute min-h-full min-w-full "
        src={LOGIN_BG}
        alt="background"
      />
      <form className="p-12 my-36 mx-auto right-0 left-0 absolute rounded-lg text-white w-4/12 bg-black bg-opacity-70">
        <h1 className="font-bold my-4 text-3xl">
          {!isSignInFlow ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInFlow && (
          <input
            className="p-4 my-4 w-full rounded-md bg-transparent border"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full rounded-md bg-transparent border"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          className="p-4 my-4 w-full rounded-md bg-transparent border"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-700 my-4 rounded-lg p-2 w-full">
          {!isSignInFlow ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-2 cursor-pointer">Forgot password?</p>
        <p className="py-2">
          {isSignInFlow ? "Already a User? " : "New to Netflix? "}
          <span
            className="cursor-pointer underline font-bold"
            onClick={toggleSignIn}
          >
            {isSignInFlow ? "Sign in now." : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
