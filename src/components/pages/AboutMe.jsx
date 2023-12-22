// AboutMe.jsx
import React from "react";
import styles from "./AboutMe.module.css"; // Import as a module
import ProfileImage from "../misc/ProfileImage";
import profilePic from "../../images/penny-and-kai.jpg";

function AboutMe() {
  return (
    <React.Fragment>
      <section className={styles.contentContainer}>
        <div className={styles.textArea}>
          <div className={styles.headerAndImage}>
            <h1 className={styles.header}>Oh Hi There</h1>
            <ProfileImage src={profilePic} alt="profile" />
          </div>
          <p className={styles.paragraph}>
            A passionate Back End Software Developer 🚀 having experience in
            building Web applications and heavy backend systems. Always
            learning, always curious
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutMe;
