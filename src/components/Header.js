import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className=" header-min d-flex align-items-center p-2 col-12 d-flex justify-content-between  ">
              <Link
                to="/"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <span>Mardonov</span>
              </Link>
              <div className="nav d-flex align-content-center">
                <ul className="d-flex gap-5  ">
                  <li className="nav-item">
                    <Link to="/" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="shop" href="#">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact" href="#">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about" href="#">
                      About
                    </Link>
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
