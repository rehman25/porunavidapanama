"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./header.module.css";
import LogoImage from "../../images/LOGO.png";
import SecLogo from "../../images/LOGOCREMITA.png";
import { IoMdMenu } from "react-icons/io";

const Header = ({ color }) => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
    <div
      className={`container-fluid ${
        color === "id" ? style.container : style.container2
      }`}
    >
      <div className="container">
        <div className={`row ${style.row}`}>
            <div className={`col-lg-12 ${style.col}`}>
          <div
            className={` ${
              color === "id" ? style.HeaderCol : style.HeaderCol2
            }`}
          >
            <Link href="../screens/generalIformation" className={style.Link}>
            Información General
            </Link>
          </div>
          <div
            className={` ${
              color === "id" ? style.HeaderCol : style.HeaderCol2
            }`}
          >
            <Link href="../screens/ourFamily" className={style.Link}>
            Nuestra Familia
            </Link>
          </div>
          <div
            className={` ${
              color === "id" ? style.HeaderCol : style.HeaderCol2
            }`}
          >
            <Link href="../screens/applications" className={style.Link}>
            Aplicaciones
            </Link>
          </div>
          <div
            className={` ${
              color === "id" ? style.HeaderCol : style.HeaderCol2
            }`}
          >
            <Link href="../screens/contact" className={style.Link}>
            Contáctanos
            </Link>
          </div>
          <div
            className={`${color === "id" ? style.HeaderCol : style.HeaderCol2}`}
          >
            <Image
              src={color === "id" ? LogoImage : SecLogo}
              className={style.Logo}
            />
          </div>
        </div>
        </div>
      </div>
    </div>

    {/* responsive Header */}
    <div
      className={`container-fluid ${
        color === "id" ? style.containerRes : style.containerRes2
      }`}
    >
      <div className="container">
        <div className={`row ${style.rowRes}`}>
            
              <div className={`col-12 ${style.menu}`}>
                    <IoMdMenu size={34} color={color === "id" ? "#a05062"  : "white"} onClick={() =>{setIsMenu(!isMenu)}} />
              </div>

                      {isMenu ?
                        <div className={`col-lg-8 ${style.colRes}`}>
                        <div className={` ${color === "id" ? style.HeaderColRes : style.HeaderColRes2 }`}>
                                <Link href="../screens/generalIformation" className={style.Link}>
                                  General information
                                </Link>
                        </div>
                        <div className={` ${color === "id" ? style.HeaderColRes : style.HeaderColRes2 }`}
                        >
                          <Link href="../screens/ourFamily" className={style.Link}>
                          Nuestra Familia
                          </Link>
                        </div>
                        <div
                        className={` ${color === "id" ? style.HeaderColRes : style.HeaderColRes2 }`}
                        >
                          <Link href="../screens/applications" className={style.Link}>
                          Aplicaciones
                          </Link>
                        </div>
                        <div
                        className={` ${color === "id" ? style.HeaderColRes : style.HeaderColRes2 }`}
                        >
                          <Link href="../screens/contact" className={style.Link}>
                          Contáctanos
                          </Link>
                        </div>
                      </div>
                      : ""}


                <div
                  className={` ${color === "id" ? style.HeaderColRes3 : style.HeaderColRes32 }`}
                >
                  <Image
                    src={color === "id" ? LogoImage : SecLogo}
                    className={style.LogoRes}
                  />
                </div>
            
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Header;
