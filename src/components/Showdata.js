import React from "react";

function Showdata(props) {
  return (
    <div className="show-data">
      <div className="row">
        <div className="col-lg-3 mt-4">
          <img
            src="image/1.jpg"
            className="w-100"
            alt=""
            srcset=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-3 mt-4">
          <img
            src="image/2.jpg"
            className="w-100"
            alt=""
            srcset=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-3 mt-4">
          <img
            src="image/3.jpg"
            className="w-100"
            alt=""
            srcset=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-3 mt-4">
          <img
            src="image/4.jpg"
            className="w-100"
            alt=""
            srcset=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Showdata;
