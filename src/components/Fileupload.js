import React, { useState } from "react";
import Progress from "./Progress";
import Showdata from "./Showdata";

function Fileupload() {
    const [file , setFile] = useState("");
    const [fileName , setFileName] = useState('انتخاب عکس')
    const onChange = e =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
    }
    console.log(file);
  return (
    <>
      <form action="">
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
