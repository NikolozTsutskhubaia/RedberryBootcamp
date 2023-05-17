import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Modules/ResumePage.module.css";
import FileUploadButton from "../Components/FileUploadButton";
import BackBtn from "../assets/BackBtn.png";
import MailIcon from "../assets/MailIcon.png";
import NumberIcon from "../assets/NumberIcon.png";
import { useRef } from "react";

const ResumePage = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const aboutMeRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  let profileImg = null;
  const [data, setData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const handleFile = (file) => {
    profileImg = URL.createObjectURL(file);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const aboutMe = aboutMeRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;

    const info = {
      name: name,
      surname: surname,
      profileImg: profileImg,
      aboutMe: aboutMe,
      email: email,
      number: number,
    };

    console.log(info);
    setData(info);
    setIsVisible(true);
    console.log(data);

    nameRef.current.value = "";
    surnameRef.current.value = "";
    profileImg = null;
    aboutMeRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
  };

  return (
    <div className={classes.body2}>
      <Link to={"/"}>
        <img src={BackBtn} alt="previousPage" className={classes.back_btn} />
      </Link>

      <div className={classes.resume_form}>
        <div className={classes.form_header}>
          პირადი ინფო
          <span>1/3</span>
        </div>
        <div className={classes.form_body_1}>
          <div className={classes.name}>
            სახელი:
            <input type="text" placeholder="ანზორ" ref={nameRef} />
            <span>მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
          <div className={classes.surname}>
            გვარი:
            <input type="text" placeholder="მუმლაძე" ref={surnameRef} />
            <span>მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
        </div>
        <div className={classes.upload_div}>
          პროფილის ფოტოს ატვირთვა:
          <FileUploadButton onFileSelect={handleFile} />
        </div>
        <div className={classes.aboutMe}>
          <label htmlFor="aboutMe">ჩემ შესახებ:</label>
          <textarea
            name="aboutMe"
            placeholder="ზოგადი ინფო შენ შესახებ"
            ref={aboutMeRef}
          ></textarea>
        </div>
        <div className={classes.contact_info}>
          <label htmlFor="email">ელ.ფოსტა</label>
          <input
            type="text"
            name="email"
            placeholder="anzorr666@redberry.ge"
            ref={emailRef}
          />
          <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
        </div>
        <div className={classes.contact_info}>
          <label htmlFor="number">მობილურის ნომერი</label>
          <input
            type="text"
            name="number"
            placeholder="+995 551 12 34 56"
            ref={numberRef}
          />
          <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
        </div>
        <div className={classes.next_page_btn}>
          <button onClick={saveHandler}>შემდეგი</button>
        </div>
      </div>
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
