import React from "react";

function Progress(props) {
  return (
    <div className="progress mt-3">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: " 30% " }}
        aria-valuenow="30"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        30%
      </div>
    </div>
  );
}

export default Progress;
