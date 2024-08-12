import React from "react";
import style from "./generalinfo.module.css";
import Header from "../../components/header/Header";
import Image from "next/image";
import Heart from "../../images/speech-bubble.svg";
import LittleHeart from "../../images/home-output.svg";
import GeneralInformation from "../../images/generalInformation.png";
import ClinicaIVI from "../../images/ClinicaIVI.svg";
import ClinicaPF from "../../images/ClinicaPF.png";
import ClinicaTFG from "../../images/ClinicaTFG.svg";

const index = () => {
  return (
    <>
      <Header color={""} />
      <div className={`${style.container}`}>
        <div className="container">
          <div className={style.row}>
            <div className={`col-lg-12 ${style.col}`}>
              <h1>Por Una Vida</h1>
              <p>
              En el 2017 se crea la Fundación Por Una Vida con el propósito de ayudar a parejas que no cuentan con los recursos necesarios para un tratamiento de fecundación in vitro (FIV).
              </p>
              <Image src={LittleHeart} />
              <Image src={GeneralInformation} className={style.Generalmage} />
            </div>
          </div>
          <div className={`row ${style.row2}`}>
            <div className={`col-1 ${style.listing}`}>
              <Image src={LittleHeart} />
            </div>
            <div className={`col-md-11 col-lg-6  ${style.col6}`}>
              <h1>Proceso de Aplicación:</h1>
              <ul>
                <li>
                  <a href="">Llenar formulario</a>
                </li>
                <li>
                Las aplicaciones recibidas serán analizadas
bajo los siguientes parámetros por el comité
de la Fundación:
                  <ul className={style.childul}>
                    <li>Evaluación médica</li>
                    <li>Historial familiar</li>
                    <li>Situación laboral</li>
                  </ul>
                </li>
                <li>
                Si las aplicaciones cumplen con los criterios requeridos se programará una entrevista.
                </li>
                <li>
                Selección de las parejas que serán beneficiadas por la Fundación Por Una Vida.
                </li>
              </ul>
              <p>
              Las aplicaciones no seleccionadas automáticamente
quedan en la base de datos de la Fundación y podrán
ser consideradas nuevamente.
              </p>
            </div>
          </div>
          <div className={`row ${style.row2}`}>
            <div className={`col-1  ${style.listing}`}>
              <Image src={LittleHeart} />
            </div>
            <div className={`col-md-11 col-lg-6  ${style.col6}`}>
              <h1>Consideraciones importantes:</h1>
              <ul>
                <li>No tener hijos.</li>
                <li>
                Contar con un diagnóstico médico que valide la necesidad de un tratamiento de fecundación in vitro (FIV).
                </li>
                <li>
                Tener una situación económica que justifique la ayuda que solicitan.
                </li>
                <li>
                Mantener afiliación a la caja de seguro social o seguro privado.
                </li>
                <li>
                Estar dispuestos a participar en una evaluación médica y psicológica.
                </li>
              </ul>
            </div>
          </div>
          <div className={`row ${style.row2}`}>
            <div className={`col-1   ${style.listing}`}>
              <Image src={LittleHeart} />
            </div>
            <div className={`col-md-11 col-lg-6 ${style.col6}`}>
              <h1>De ser una pareja seleccionada:</h1>
              <ul>
                <li>
                Se cubrirá el costo del tratamiento de fecundación in vitro (FIV) en una de las clínicas aliadas.
                </li>
                <li>
                La ayuda económica va directo a las clínicas aliadas, no a las parejas beneficiadas.
                </li>
                <li>
                Si la prueba de embarazo es positiva, se le dará seguimiento hasta confirmar latidos.
                </li>
                <li>
                No se cubren medicamentos o procedimientos que sean necesarios antes del tratamiento de fecundación in vitro (FIV).
                </li>
                <li>
                No se cubren gastos del embarazo o parto.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${style.Footer}`}>
        <div className="row">
          <div className="col-12">
            <h1 className={style.footerHeadingg}>Clínicas Aliadas</h1>
          </div>
        </div>
        <div className={`row ${style.footerImageRow}`}>
            <Image src={ClinicaTFG} className={style.footerImage} />
            <Image src={ClinicaIVI} className={style.footerImage} />
            <Image src={ClinicaPF} className={style.footerImage} />
          {/* <div className="col-sm-3 ">
          </div>
          <div className="col-sm-3">
          </div>
          <div className="col-sm-3">
          </div> */}
        </div>
      </div>
    </>
  );
};

export default index;
