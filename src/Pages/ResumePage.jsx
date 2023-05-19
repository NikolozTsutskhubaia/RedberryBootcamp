import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Modules/ResumePage.module.css";
import BackBtn from "../assets/BackBtn.png";
import MailIcon from "../assets/MailIcon.png";
import NumberIcon from "../assets/NumberIcon.png";
import PersonalInfoComponent from "../Components/PersonalInfoComponent";
import ExperienceComponent from "../Components/ExperienceComponent";

const ResumePage = () => {
  const [data, setData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("A");
  const setters = {
    setData,
    setIsVisible,
    setCurrentComponent,
  };

  return (
    <div className={classes.body2}>
      <Link to={"/"}>
        <img src={BackBtn} alt="previousPage" className={classes.back_btn} />
      </Link>
      {currentComponent == "A" && <PersonalInfoComponent setters={setters} />}
      {currentComponent == "B" && <ExperienceComponent setters={setters} />}
      <div className={classes.resume_display}>
        {isVisible && (
          <div className={classes.resume_container}>
            <div className={classes.resume_info}>
              <div className={classes.name_surname_info}>
                <h1>{data.name}</h1>
                <h1>{data.surname}</h1>
              </div>
              <div className={classes.email_info}>
                <img src={MailIcon} />
                {data.email}
              </div>
              <div className={classes.number_info}>
                <img src={NumberIcon} />
                {data.number}
              </div>
              <h2>ჩემ შესახებ</h2>
              <div className={classes.aboutMe_info}>{data.aboutMe}</div>
            </div>
            <img src={data.profileImg} className={classes.profile_image} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
