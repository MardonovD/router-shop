import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 d-flex justify-content-between bg-danger">
            <span >Mardonov</span>
            <div className="nav">
              <ul className="d-flex gap-5  ">
                <li className="nav-item">
                  <a href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#">About</a>
                </li>
                <li className="nav-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
