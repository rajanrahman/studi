import React, { useState, useEffect } from "react";

import { useForm } from "../../hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";
import Input from "../../UIElements/Input";
import Button from "../../UIElements/Button";
import Jsh from "../../assets/images/IMG_0001.JPG";
import "./Profile.css";

const USERS = [
  {
    name: "Rajan Rahman",

    school: "UC Irvine",
    role: "Student Tutor",

    bio: "Computer science major but don't know how to code",
    id: 2,
    img: "Raj",
    instagram: "raj_music",
    work: "BeatStyle - Front End Dev"
  },
  {
    name: "Edwin Joshua Miciano",
    school: "PCC / SMC",
    role: "Student",
    bio:
      "Looking for a study partner in Chemistry! Volleyball player and strugling rapper. Looking for basketball help too",
    id: 1,
    img: Jsh,
    instagram: "ejomiciano",
    work: "Studi - Founder"
  }
];

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = 1;

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false
      },
      bio: {
        value: "",
        isValid: false
      },
      school: {
        value: "",
        isValid: false
      },
      instagram: {
        value: "",
        isValid: false
      },
      work: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const identifiedUser = USERS.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedUser) {
      setFormData(
        {
          instagram: {
            value: identifiedUser.instagram,
            isValid: true
          },
          bio: {
            value: identifiedUser.bio,
            isValid: true
          },
          name: {
            value: identifiedUser.name,
            isValid: true
          },
          school: {
            value: identifiedUser.school,
            isValid: true
          },
          work: {
            value: identifiedUser.work,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedUser]);

  const submitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedUser) {
    return (
      <div className="center">
        <div>
          <h2>Could not find place!</h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <div className="input-fields">
        <div>
          <img src={Jsh} alt="user photo" />
          <Button styleProp="img-btn">Choose Image</Button>
        </div>
        <div>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
            initialValue={formState.inputs.name.value}
            initialValid={formState.inputs.name.isValid}
            style={{ marginTop: "0" }}
          />
          <Input
            id="school"
            element="input"
            type="text"
            label="School"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid school."
            onInput={inputHandler}
            initialValue={formState.inputs.school.value}
            initialValid={formState.inputs.school.isValid}
          />
          <Input
            id="work"
            element="input"
            type="text"
            label="Work"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.work.value}
            initialValid={formState.inputs.work.isValid}
          />
          <Input
            id="bio"
            element="textarea"
            label="Bio"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            rows={5}
            onInput={inputHandler}
            initialValue={formState.inputs.bio.value}
            initialValid={formState.inputs.bio.isValid}
          />
        </div>
      </div>

      <Button
        styleProp="submit-btn"
        type="submit"
        disabled={!formState.isValid}
      >
        UPDATE
      </Button>
    </form>
  );
};

export default Profile;
