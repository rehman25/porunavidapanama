import React from "react";
import Header from "../../components/header/Header";
import style from "./contact.module.css";

const contact = () => {
  return (
    <>
      <Header color={"id"} />
      <div className={`container-fluid ${style.container}`}>
        <div className="container">
          <div className={`row ${style.row}`}>
            <div className={`col-12 ${style.col}`}>
                <h1>Contact Us</h1>
            </div>
            <div className={`col-12 ${style.col}`}>
              <form className={style.form}>
                  <div className="row mt-4">
                         <div className="col-md-6">
                            <div className={`form-group ${style.formgroup}`}>
                                <label>Name</label>
                                <input type="text" className="form-control" />
                            </div>
                         </div>
                         <div className="col-md-6">
                            <div className={`form-group ${style.formgroup}`}>
                                <label>Last name</label>
                                <input type="text" className="form-control" />
                            </div>
                         </div>
  
                  </div>
                  <div className="row mt-4">
                         <div className="col-md-12">
                            <div className={`form-group ${style.formgroup}`}>
                                <label>Phone or Cell Phone</label>
                                <input type="text" className="form-control" />
                            </div>
                         </div>
                  </div>
                  <div className="row mt-4">
                         <div className="col-md-12">
                            <div className={`form-group ${style.formgroup}`}>
                                <label>Email</label>
                                <input type="text" className="form-control" />
                            </div>
                         </div>
                  </div>
                  <div className="row mt-4">
                         <div className="col-md-12">
                            <div className={`form-group ${style.formgroup}`}>
                                <label>Email</label>
                                <textarea type="text" className="form-control" />
                            </div>
                         </div>
                  </div>
                  <div className="row mt-4">
                         <div className="col-md-12">
                            <div className={`form-group ${style.formgroup2}`}>

                                <button>Submit</button>
                            </div>
                         </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
