import React from "react";
import "./AboutMe.css";
import ProfileImage from "../misc/ProfileImage";
import profilePic from "../../images/penny-and-kai.jpg";

function AboutMe() {
  return (
    <React.Fragment>
      <section className="content-container">
        <div className="textArea">
          <div className="header-and-image">
            <h1 className="header">Oh Hi There</h1>
            <ProfileImage src={profilePic} alt="profile" />
          </div>
          <p className="paragraph">
            A passionate Back End Software Developer 🚀 having experience in
            building Web applications and heavy backend systems. Always
            learning, always curious
          </p>
        </div>
        <div className="profile-img-container"></div>
      </section>
    </React.Fragment>
  );
}

export default AboutMe;
