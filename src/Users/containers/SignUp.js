import React, { useState, useContext } from "react";

import Button from "../../UIElements/Button";
import Input from "../../UIElements/Input";
import Modal from "../../UIElements/Modal";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../util/validators";
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/auth-context";
import "./SignUp.css";

const SignUp = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState("");

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (isLoginMode === "SIGN_UP") {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode("");
  };

  const authSubmitHandler = event => {
    // event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  if (isLoginMode === "LOG_IN") {
    return (
      <div className="sign-up-page">
        <Modal>
          <h1>Studi</h1>
          <p>Find somebody to study with now!</p>
          <Input
            element="input"
            id="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="email"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter at least 5 characters."
            onInput={inputHandler}
          />
          <Button onClick={authSubmitHandler}>Log In</Button>
          <Button onClick={switchModeHandler} styleProp="go-back">
            Go Back
          </Button>
        </Modal>
      </div>
    );
  }

  if (isLoginMode === "SIGN_UP") {
    return (
      <div className="sign-up-page">
        <div className="sign-up-modal">
          <h1>Studi</h1>
          <p>Find somebody to study with now!</p>
          <Input
            element="input"
            id="name"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="email"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter at least 5 characters."
            onInput={inputHandler}
          />
          <Button onClick={authSubmitHandler}>Sign Up</Button>
          <Button onClick={switchModeHandler} styleProp="go-back">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="sign-up-page">
      <div className="sign-up-modal">
        <h1>Studi</h1>
        <p>Find somebody to study with now!</p>
        <Button onClick={() => setIsLoginMode("LOG_IN")} styleProp="log-in">
          Log In
        </Button>
        <Button onClick={() => setIsLoginMode("SIGN_UP")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUp;
