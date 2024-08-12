import React from "react";
import style from "./generalinfo.module.css";
import Header from "../../components/header/Header";
import Image from "next/image";
import Heart from "../../images/speech-bubble.svg";
import LittleHeart from "../../images/Little-bubble.svg";
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
              <h1>For a Life</h1>
              <p>
                In 2017, the Fundación Por Una Vida was created with the purpose
                of helping couples who do not have the necessary resources for
                in vitro fertilization (IVF) treatment.
              </p>
              <Image src={Heart} />
              <Image src={GeneralInformation} className={style.Generalmage} />
            </div>
          </div>
          <div className={`row ${style.row2}`}>
            <div className="col-1">
              <Image src={LittleHeart} />
            </div>
            <div className={`col-6 ${style.col6}`}>
              <h1>Application process:</h1>
              <ul>
                <li>
                  <a href="">Fill form</a>
                </li>
                <li>
                  The applications received will be analyzed under the following
                  parameters by the Foundation committee:
                  <ul className={style.childul}>
                    <li>Medical evaluation</li>
                    <li>Family history</li>
                    <li>Employment situation</li>
                  </ul>
                </li>
                <li>
                  If applications meet the required criteria an interview will
                  be scheduled.
                </li>
                <li>
                  Selection of couples who will benefit from the Por Una Vida
                  Foundation.
                </li>
              </ul>
              <p>
                Applications not automatically selected remain in the
                Foundation's database and may be considered again.
              </p>
            </div>
          </div>
          <div className={`row ${style.row2}`}>
            <div className="col-1">
              <Image src={LittleHeart} />
            </div>
            <div className={`col-6 ${style.col6}`}>
              <h1>Important considerations:</h1>
              <ul>
                <li>Not having children.</li>
                <li>
                  Have a medical diagnosis that validates the need for in vitro
                  fertilization (IVF) treatment.
                </li>
                <li>
                  Have a financial situation that justifies the aid they
                  request.
                </li>
                <li>
                  Maintain membership in the social security fund or private
                  insurance.
                </li>
                <li>
                  Be willing to participate in a medical and psychological
                  evaluation.
                </li>
              </ul>
            </div>
          </div>
          <div className={`row ${style.row2}`}>
            <div className="col-1">
              <Image src={LittleHeart} />
            </div>
            <div className={`col-6 ${style.col6}`}>
              <h1>If you are a selected couple:</h1>
              <ul>
                <li>
                  The cost of in vitro fertilization (IVF) treatment at one of
                  the partner clinics will be covered.
                </li>
                <li>
                  Financial aid goes directly to partner clinics, not to the
                  couples who benefit.
                </li>
                <li>
                  If the pregnancy test is positive, you will be monitored until
                  a heartbeat is confirmed.
                </li>
                <li>
                  Medications or procedures that are necessary before in vitro
                  fertilization (IVF) treatment are not covered.
                </li>
                <li>
                  Pregnancy or childbirth expenses are not covered. Allied
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${style.Footer}`}>
        <div className="row">
          <div className="col-12">
            <h1 className={style.footerHeadingg}>Allied Clinics</h1>
          </div>
        </div>
        <div className={`row ${style.footerImageRow}`}>
          <div className="col-4">
            <Image src={ClinicaTFG} className={style.footerImage} />
          </div>
          <div className="col-4">
            <Image src={ClinicaIVI} className={style.footerImage} />
          </div>
          <div className="col-4">
            <Image src={ClinicaPF} className={style.footerImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
