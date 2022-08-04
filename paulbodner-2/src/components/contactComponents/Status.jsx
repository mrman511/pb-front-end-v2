import React from "react";
import './status.scss';

export default function Status() {

  return (
    <div className="email-component email">
      <div className="status-container">
        <div className="lds-grid">
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
          <div className="status-block" ></div>
        </div>
      </div>
    </div>
  );
}