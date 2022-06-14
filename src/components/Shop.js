import React from "react";

const Shop = () => {
  return (
    <div className="container">
      <div className="shop-header p-2 mb-2  d-flex justify-content-between">
        <div className="shop-header-name d-flex gap-3 align-content-center ">
          <h4>Xush Kelibsiz : </h4>
          <h4>Name</h4>
          <h4>LastName</h4>
        </div>
        <div className="shop-header-icon">icon</div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ width: " 18rem" }}>
            <img src="..." className="card-img-top" alt="image product" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
