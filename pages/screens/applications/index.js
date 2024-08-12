import React, {useState} from "react";
import style from "./application.module.css";
import Modal from "../../components/modal/modal";
import Header from "../../components/header/Header";
import Form from "../../components/form/form";

const Application = () => {
  return (
    <>
      <Modal  />
      <Header color={""} />
      <div className={`container-fluid ${style.container}`}>
        <div className="container ">
          <div className={`row  ${style.row}`}>
            <div className={`col-lg-12 ${style.col}`}>
              <h1>Applications</h1>
              <p>
                If your doctor has confirmed that you need in vitro
                fertilization (IVF) treatment to achieve pregnancy, but you do
                not have the necessary resources, complete the form.
              </p>
              <p>
                The Foundation For a Life evaluates each application received
                but can only help a small number of couples each year.
              </p>
              <p>
                We invite you to share your story because we know it has not
                been an easy road.
              </p>

            </div>
              <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
