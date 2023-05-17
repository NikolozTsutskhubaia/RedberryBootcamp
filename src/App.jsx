import { Link } from "react-router-dom";
import RedberryLogo from "./assets/RedberryLogo.png";
import classes from "./Modules/App.module.css";

function App() {
  return (
    <div className={classes.body1}>
      <nav>
        <img src={RedberryLogo} className={classes.redberry_logo} alt="" />
        <div className={classes.line}></div>
      </nav>
      <div className={classes.button_container}>
        <Link to={"/resume"}>
          <button className={classes.add_resume}>რეზიუმეს დამატება</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
