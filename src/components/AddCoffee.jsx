import React from "react";

const AddCoffee = () => {
  return (
    <div>
      <h1>Add new stock</h1>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Coffee Name</span>
          </label>
          <label className="input-group">
            <span>Coffee</span>
            <input
              type="text"
              placeholder="Brand Name"
              className="input input-bordered"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <label className="input-group">
            <span>Chef</span>
            <input
              type="text"
              placeholder="Chef's Name"
              className="input input-bordered"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <span>Supplier</span>
            <input
              type="text"
              placeholder="Supplier's Name"
              className="input input-bordered"
            />
          </label>
        </div>

      </div>
    </div>
  );
};

export default AddCoffee;
