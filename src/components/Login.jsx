import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LOGIN_BG from "./../assets/login-bg.jpg";
import { validateForm } from "../utils/formValidation";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const [isSignInFlow, setIsSignInFlow] = useState(false);
  const [validationMsg, setValidationMsg] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleSubmitBtn = () => {
    const errorMessages = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef?.current?.value
    );
    setValidationMsg(errorMessages);
    if (
      errorMessages.emailInvalidMsg ||
      errorMessages.passwordInvalidMsg ||
      (!isSignInFlow && errorMessages.nameInvalidMsg)
    )
      return;
    if (!isSignInFlow) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 my-36 mx-auto right-0 left-0 absolute rounded-lg text-white w-4/12 bg-black bg-opacity-70"
      >
        <h1 className="font-bold my-4 text-3xl">
          {isSignInFlow ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFlow && (
          <>
            <input
              ref={nameRef}
              className="p-4 my-4 w-full rounded-md bg-transparent border"
              type="text"
              placeholder="Full Name"
            />
            <p className="text-red-600">{validationMsg?.nameInvalidMsg}</p>
          </>
        )}
        <input
          ref={emailRef}
          className="p-4 my-4 w-full rounded-md bg-transparent border"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <p className="text-red-600">{validationMsg?.emailInvalidMsg}</p>

        <input
          ref={passwordRef}
          className="p-4 my-4 w-full rounded-md bg-transparent border"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600">{validationMsg?.passwordInvalidMsg}</p>
        <button
          onClick={handleSubmitBtn}
          className="bg-red-700 my-4 rounded-lg p-2 w-full"
        >
          {isSignInFlow ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-2 cursor-pointer">Forgot password?</p>
        <p className="py-2">
          {!isSignInFlow ? "Already a User? " : "New to Netflix? "}
          <span
            className="cursor-pointer underline font-bold"
            onClick={toggleSignIn}
          >
            {!isSignInFlow ? "Sign in now." : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
