import React from "react";
import style from "./family.module.css";
import Header from "../../components/header/Header";
import Image from "next/image";
import Heart from "../../images/speech-bubble.svg";
import Nuestra from "../../images/Nuestra.png";
import GeneralInformation from "../../images/generalInformation.png";
import ClinicaIVI from "../../images/ClinicaIVI.svg";
import ClinicaPF from "../../images/ClinicaPF.png";
import ClinicaTFG from "../../images/ClinicaTFG.svg";

const family = () => {
  return (
    <>
      <Header color={"id"} />
      <div className={`${style.container}`}>
        <div className="container">
          <div className={style.row}>
            <div className={`col-lg-12 ${style.col}`}>
              <h1>Our Family</h1>
            </div>
          </div>
          <div className={`row ${style.circleRow}`}>
               <div className="col-4 d-flex justify-content-end">
                    <div className={style.cricle}>
                        <h1>38</h1>
                         <p>BENEFITED 
                            FAMILIES</p>
                    </div>
               </div>
               <div className="col-4">
                    <div className={style.cricle}>
                        <h1>16</h1>
                         <p>BABIES
                         AT HOME</p>
                    </div>
               </div>
               <div className="col-4">
                    <div className={style.cricle}>
                        <h1>4</h1>
                         <p>BABIES ON THE WAY</p>
                    </div>
               </div>
          </div>
          <div className={`row ${style.contentRow}`}>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Abby</h2> 
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Ethan</h2> 
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Nuestra} className={style.NuestraImage} />
              </div>
          </div>
          <div className={`row ${style.contentRow}`}>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Kaythleen</h2> 
              </div>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Sheryl</h2> 
              </div>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart}  />
                  <h2>Caleb</h2> 
              </div>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart}  />
                  <h2>Chritopher</h2> 
              </div>
          </div>
          <div className={`row ${style.contentRow}`}>
          <div className={`col-4 ${style.content}`}>
                  <Image src={Nuestra} className={style.NuestraImage} />
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Abby</h2> 
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Ethan</h2> 
              </div>
             
          </div>
          <div className={`row ${style.contentRow}`}>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Kaythleen</h2> 
              </div>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Sheryl</h2> 
              </div>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart}  />
                  <h2>Caleb</h2> 
              </div>
              <div className={`col-3 ${style.content}`}>
                  <Image src={Heart}  />
                  <h2>Chritopher</h2> 
              </div>
          </div>
          <div className={`row ${style.contentRow}`}>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Abby</h2> 
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Ethan</h2> 
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Nuestra} className={style.NuestraImage} />
              </div>
          </div>
          <div className={`row ${style.contentRow}`}>
          <div className={`col-4 ${style.content}`}>
                  <Image src={Nuestra} className={style.NuestraImage} />
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Abby</h2> 
              </div>
              <div className={`col-4 ${style.content}`}>
                  <Image src={Heart} />
                   <h2>Ethan</h2> 
              </div>
              
          </div>
        </div>
      </div>
      
    </>
  );
};

export default family;
