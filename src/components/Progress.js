import React from "react";

function Progress({precentage}) {
    console.log(precentage);
  return (
    <div className="progress mt-3">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width:`${precentage}%`}}
        aria-valuenow="30"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {precentage}%
      </div>
    </div>
  );
}

export default Progress;
