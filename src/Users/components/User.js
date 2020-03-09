import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WorkIcon from "@material-ui/icons/Work";

import "./User.css";

const User = props => {
  return (
    <div className="user">
      <div className="picture-ctn">
        <img src={props.img} alt={props.alt} />
        <p className="user-heading">{`${props.text.name}, ${props.text.school} ${props.text.role}`}</p>
      </div>

      <div className="user-description">
        {props.about}
        <div className="socials-ctn">
          {props.socials.instagram && (
            <a href="instagram.com" className="socials-icon-tag">
              <InstagramIcon />
              {`@${props.socials.instagram}`}
            </a>
          )}
          {props.socials.twitter && (
            <a href="instagram.com" className="socials-icon-tag">
              <TwitterIcon />
              {`@${props.socials.twitter}`}
            </a>
          )}
          {props.socials.work && (
            <a href="instagram.com" className="socials-icon-tag">
              <WorkIcon />
              {`@${props.socials.work}`}
            </a>
          )}
          {props.socials.gamer && (
            <a href="instagram.com" className="socials-icon-tag">
              <SportsEsportsIcon />
              {`@${props.socials.gamer}`}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
