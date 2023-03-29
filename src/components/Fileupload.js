import React, { useState } from "react";
import Progress from "./Progress";
import Showdata from "./Showdata";
import axios from 'axios'

function Fileupload() {
    const [file , setFile] = useState("");
    const [fileName , setFileName] = useState('انتخاب عکس')
    const onChange = e =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
    }
    console.log(file);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit');
        const formData = new FormData();
        formData.append('image', file);
        axios.post('http://localhost:8000/api/upload', formData, {
            headers:{ 
                "Content-Type" : "multipart/form-data"
            }
        })
        .then(res =>{
            console.log(res);
        })
        .catch()
    }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>    
        <div className="form-group mt-5">
          <label htmlFor="customfile" className="custom-file-label mb-2">
           {fileName}
          </label>
          <input type="file" className="form-control" name="image" id="customFile" onChange={onChange}/>
          <Progress/>
          <input type="submit" className="btn btn-primary mt-4" value="ارسال عکس" />
        </div>
      </form>
      <Showdata/>
    </>
  );
}

export default Fileupload;
