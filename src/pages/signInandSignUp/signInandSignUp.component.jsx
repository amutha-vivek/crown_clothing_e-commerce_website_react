import React from "react";

import "./signInandSignUp.styles.scss";

import SignIn from "../../components/signin/SignIn.component";
import SignUp from "../../components/signUp/SignUp.component";

const SignInandSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInandSignUpPage;
