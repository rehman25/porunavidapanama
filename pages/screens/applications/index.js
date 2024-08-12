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
              <h1>Aplicaciones</h1>
              <p>
              Si su doctor les ha confirmado que necesitan un tratamiento
de fecundación in vitro (FIV) para lograr un embarazo,
pero no tienen los recursos necesarios, complete el formulario.
              </p>
              <p>
              La Fundación Por una Vida evalúa cada aplicación recibida pero
              sólo puede ayudar a un pequeño número de parejas cada año.
              </p>
              <p>
              Los invitamos a compartir su historia porque sabemos que
              no ha sido un camino fácil.
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
