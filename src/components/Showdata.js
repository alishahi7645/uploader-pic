import React, { useEffect, useState } from "react";
import axios from "axios";

function Showdata() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/upload-data").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="show-data">
      <div className="row">
        {data &&
          data.map((itme) => 
            <div className="col-lg-3 mt-4">
              <img
                src={`http://localhost:8000/back/images/`+itme.image}
                className="w-100"
                alt=""
                srcset=""
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
          )}
      </div>
    </div>
  );
}

export default Showdata;
