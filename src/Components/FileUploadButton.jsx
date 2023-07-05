import { useRef } from "react";
import classes from "../Modules/ResumePage.module.css";


const FileUploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <button onClick={handleFileSelect} className={classes.file_btn}>
        ატვირთვა
      </button>
    </div>
  );
};

export default FileUploadButton;
