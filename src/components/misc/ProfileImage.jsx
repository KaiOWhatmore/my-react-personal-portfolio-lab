import React from "react";
import "./ProfileImage.css"; // make sure to import your CSS file

const ProfileImage = ({ src }) => {
  return <img src={src} alt="Profile" className="profile-img" />;
};

export default ProfileImage;
