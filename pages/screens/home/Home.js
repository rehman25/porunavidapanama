import React from "react";
import Header from "../../components/header/Header"
import style from "./Home.module.css";
import Image from "next/image";
import Heart from "../../images/speech-bubble.svg"
const Home = () => {
  return (
    <>
    <Header color={'id'} />
      <div className={`container-fluid  ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-12`}>
          <div className={`${style.left}`}></div>
          <div className={` ${style.right}`}>
            <div className={style.box}>
              <p>Children are one of the greatest joys in life.</p>
               <div className={style.heart}>
                <Image src={Heart}  />
               </div>
              <p>
                The Por Una Vida Foundation gives an opportunity to couples who
                have this dream and face fertility problems
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
