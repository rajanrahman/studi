import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ChatIcon from "@material-ui/icons/Chat";

import Im from "../../assets/images/IMG_0001.JPG";
import Raj from "../../assets/images/FullSizeRender.jpg";
import "./Users.css";
import User from "../components/User";

const users = [
  {
    text: {
      name: "Rajan Rahman",
      school: "UC Irvine",
      role: "Student Tutor"
    },
    about: "Computer science major but don't know how to code",
    id: "2",
    img: Raj,
    socials: {
      instagram: "raj_music",
      work: "BeatStyle - Front End Dev"
    }
  },
  {
    text: {
      name: "Edwin Joshua Miciano",
      school: "PCC / SMC",
      role: "Student"
    },
    about:
      "Looking for a study partner in Chemistry! Volleyball player and strugling rapper. Looking for basketball help too",
    id: "1",
    img: Im,
    socials: {
      instagram: "ejomiciano",
      twitter: "ejomiciano",
      gamer: "xhentro",
      work: "Studi - Founder"
    }
  }
];

const Users = props => {
  const [loadedUsers, loadedUsersHandler] = useState(users);
  const [focusedUser, setFocusedUser] = useState(loadedUsers[1]);

  const changeUser = () => {
    if (focusedUser === loadedUsers[0]) {
      setFocusedUser(loadedUsers[1]);
    } else {
      setFocusedUser(loadedUsers[0]);
    }
  };

  const users_profiles = loadedUsers.map(u => {
    if (u === focusedUser) {
      return (
        <User
          text={u.text}
          about={u.about}
          id={u.id}
          img={u.img}
          socials={u.socials}
        />
      );
    }
  });

  return (
    <div className="users-page">
      <div className="users">{users_profiles} </div>
      <div>
        <KeyboardArrowLeftIcon
          onClick={changeUser}
          style={{
            fontSize: 70,
            color: "white",
            cursor: "pointer"
          }}
        />
        <ChatIcon
          style={{
            fontSize: 70,
            color: "white",
            cursor: "pointer",
            textAlign: "center",
            margin: "0 5rem"
          }}
        />
        <KeyboardArrowRightIcon
          onClick={changeUser}
          style={{
            fontSize: 70,
            color: "white",
            cursor: "pointer"
          }}
        />{" "}
      </div>
    </div>
  );
};

export default Users;
