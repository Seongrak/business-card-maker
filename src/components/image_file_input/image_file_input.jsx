import React, { useRef,useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputR = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputR.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);

    const uploaded = await imageUploader.upload(event.target.files[0]);
    // imageUploader.upload(event.target.files[0].then(console.log);
    
    setLoading(false);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputR}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
     {!loading && <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
