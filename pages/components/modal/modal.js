'use-client'
import React,{useState} from 'react'
import style from './modal.module.css'
import { GiTireIronCross } from "react-icons/gi";


const modal = () => {
  const [showModal, setShowModal] = useState(true);



  return (

    showModal ? (
      <div className={`container-fluid ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-12 ${style.col12}`}>
            <GiTireIronCross size={24} color="white" className={style.cross} />
          </div>
          <div className={`col-12 ${style.col}`}>
            <div className={style.box}>
              <h3>Important considerations:</h3>
              <ul>
                <li>Not having children.</li>
                <li>Have a medical diagnosis that validates the need for in vitro fertilization (IVF) treatment.</li>
                <li>Have a financial situation that justifies the aid they request.</li>
                <li>Maintain membership in the social security fund or private insurance.</li>
                <li>Be willing to participate in a medical and psychological evaluation.</li>
              </ul>
              <div className={style.btnRow}>
                <button onClick={() => setShowModal(false)}>ACCEPT</button>
                <button className={style.btn} onClick={() => setShowModal(false)}>GO BACK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  )
}

export default modal