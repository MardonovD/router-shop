import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className=" header-min d-flex align-items-center p-2 col-12 d-flex justify-content-between  ">
              <span>Mardonov</span>
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
    </div>
  );
};

export default Header;
