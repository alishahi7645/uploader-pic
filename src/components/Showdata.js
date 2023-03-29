import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Showdata() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/upload-data").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="show-data">
      <div className="container">
        <div className="button">
          <Link to="/" className="btn btn-success mt-3">برگشت</Link>
        </div>
        <div className="row">
          {data &&
            data.map((item) => (
              <div className="col-lg-3 mt-4" key={item.id}>
                <img
                  src={`http://localhost:8000/back/images/` + item.image}
                  className="w-100"
                  alt=""
                  srcset=""
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Showdata;
