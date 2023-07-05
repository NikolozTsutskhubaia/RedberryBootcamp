
import { useRef, useState } from "react";
import classes from "../Modules/ResumePage.module.css";

const EducationComponent = (props) => {
  const educationRef = useRef();
  const degreeRef = useRef();
  const endDateRef = useRef();
  const descriptionRef = useRef();
  const [style , setStyle] = useState(classes.add_experience_none);

  const pageBackHandler = () => {
    props.setters.setCurrentComponent("B");
  };


  const changeStyle = () => {
    setStyle(classes.add_experience)
  }



  return (
    <div className={classes.education_form}>
      <div className={classes.form_header}>
        განათლება
        <span>3/3</span>
      </div>
      <div className={classes.long_field}>
        სასწავლებელი:
        <input
          type="text"
          placeholder="სასწავლებელი"
          ref={educationRef}
        />
        <span>მინიმუმ 2 სიმბოლო</span>
      </div>
      
      <div className={classes.form_body_1}>
        <div className={classes.short_field}>
          ხარისხი:
          <select ref={degreeRef}>
                <option selected>აირჩიეთ ხარისხი</option>
                <option value="">sdagdsgsd</option>
                <option value="">sdagdsgsd</option>
                <option value="">sdagdsgsd</option>
            </select>
        </div>
        <div className={classes.short_field}>
          დამთავრების რიცხვი:
          <input type="text" placeholder="mm / dd / yyyy" ref={endDateRef} />
        </div>
      </div>
      <div className={classes.description_field}>
        <label htmlFor="aboutMe">აღწერა:</label>
        <textarea
          name="description"
          placeholder="სასწავლებლის აღწერა"
          className={classes.description_input}
          ref={descriptionRef}
        ></textarea>
      </div>
      <div className={style}>
        <br />
        <div className={classes.long_field}>
          სასწავლებელი:
          <input
            type="text"
            placeholder="სასწავლებელი"
            ref={educationRef}
          />
          <span>მინიმუმ 2 სიმბოლო</span>
        </div>
        <div className={classes.form_body_1}>
          <div className={classes.short_field}>
            ხარისხი:
            <select ref={degreeRef}>
                <option selected>აირჩიეთ ხარისხი</option>
                <option value="">sdagdsgsd</option>
                <option value="">sdagdsgsd</option>
                <option value="">sdagdsgsd</option>
            </select>
          </div>
          <div className={classes.short_field}>
            დამთავრების რიცხვი:
            <input type="text" placeholder="mm / dd / yyyy" ref={endDateRef} />
          </div>
        </div>
        <div className={classes.description_field}>
          <label htmlFor="aboutMe">აღწერა:</label>
          <textarea
            name="description"
            placeholder="სასწავლებლის აღწერა"
            className={classes.description_input}
            ref={descriptionRef}
          ></textarea>
        </div>
      </div>
      <div className={classes.add_education_btn}>
        <button onClick={changeStyle}>სასწავლებლის დამატება</button>
      </div>
      <div className={classes.page_btns_container}>
        <div className={classes.page_btn} onClick={pageBackHandler}>
          <button>უკან</button>
        </div>
        <div className={classes.page_btn}>
          <button>შემდეგი</button>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
