'use-client'
import React,{useState} from 'react'
import style from './modal.module.css'
import { GiTireIronCross } from "react-icons/gi";
import Link from 'next/link';
import { useRouter } from 'next/router';



const modal = () => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();
  const handleGoBack = () => {
    router.back();  
  };



  return (

    showModal ? (
      <div className={`container-fluid ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-12 ${style.col12}`}>
            <GiTireIronCross size={24} color="white" className={style.cross} onClick={handleGoBack} />
          </div>
          <div className={`col-12 ${style.col}`}>
            <div className={style.box}>
              <h3>Consideraciones importantes:</h3>
              <ul>
                <li>No tener hijos.</li>
                <li>Contar con un diagnóstico médico que valide la necesidad de un tratamiento de fecundación in vitro (FIV).</li>
                <li>Tener una situación económica que justifique la ayuda que solicitan.</li>
                <li>Mantener afiliación a la caja de seguro social o seguro privado.</li>
                <li>Estar dispuestos a participar en una evaluación médica y psicológica.</li>
              </ul>
              <div className={style.btnRow}>
                <button onClick={() => setShowModal(false)}>ACEPTAR</button>
                <button className={style.btn} onClick={handleGoBack}>REGRESAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  )
}

export default modal