import React from "react";
import { useRef } from "react";
import FileUploadButton from "../Components/FileUploadButton";
import classes from "../Modules/ResumePage.module.css";

const PersonalInfoComponent = (props) => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const aboutMeRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  let profileImg = null;

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
    props.setters.setData(info);
    props.setters.setIsVisible(true);
    props.setters.setCurrentComponent("B");
    console.log(data);

    nameRef.current.value = "";
    surnameRef.current.value = "";
    profileImg = null;
    aboutMeRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
  };

  return (
    <div className={classes.resume_form}>
      <div className={classes.form_header}>
        პირადი ინფო
        <span>1/3</span>
      </div>
      <div className={classes.form_body_1}>
        <div className={classes.short_field}>
          სახელი:
          <input type="text" placeholder="ანზორ" ref={nameRef} />
          <span>მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
        <div className={classes.short_field}>
          გვარი:
          <input type="text" placeholder="მუმლაძე" ref={surnameRef} />
          <span>მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
      </div>
      <div className={classes.upload_div}>
        პროფილის ფოტოს ატვირთვა:
        <FileUploadButton onFileSelect={handleFile} />
      </div>
      <div className={classes.about_me_field}>
        <label htmlFor="aboutMe">ჩემ შესახებ:</label>
        <textarea
          name="aboutMe"
          placeholder="ზოგადი ინფო შენ შესახებ"
          className={classes.about_me_input}
          ref={aboutMeRef}
        ></textarea>
      </div>
      <div className={classes.long_field}>
        <label htmlFor="email">ელ.ფოსტა</label>
        <input
          type="text"
          name="email"
          placeholder="anzorr666@redberry.ge"
          ref={emailRef}
        />
        <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
      </div>
      <div className={classes.long_field}>
        <label htmlFor="number">მობილურის ნომერი</label>
        <input
          type="text"
          name="number"
          placeholder="+995 551 12 34 56"
          ref={numberRef}
        />
        <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
      </div>
      <div className={classes.page_btn}>
        <button onClick={saveHandler}>შემდეგი</button>
      </div>
    </div>
  );
};

export default PersonalInfoComponent;
