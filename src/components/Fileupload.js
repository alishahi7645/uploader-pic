import React, { useState } from "react";
import Progress from "./Progress";
import Showdata from "./Showdata";
import axios from "axios";
import {Link} from 'react-router-dom'

function Fileupload() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("انتخاب عکس");
  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [massage , setMassage] = useState('');
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  console.log(file);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post("http://localhost:8000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPrecentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          setTimeout(()=> setUploadPrecentage(0), 5000)
        },
      })
      .then((res) => {
        console.log(res);
        setMassage(res.data.message)
      })
      .catch();
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <p style={{color:'green', fontWeight:'bold', fontSize:'20px'}}>{massage}</p>
        <div className="form-group mt-5">
          <label htmlFor="customfile" className="custom-file-label mb-2">
            {fileName}
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            id="customFile"
            onChange={onChange}
          />
          <Progress precentage={uploadPrecentage}/>
          <input
            type="submit"
            className="btn btn-primary mt-4"
            value="ارسال عکس"
          />
        </div>
      </form>
      <Link to='/gallery' className="btn btn-danger mt-3">نمایش تصاویر</Link>
    </>
  );
}

export default Fileupload;
