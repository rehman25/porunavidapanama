import React, {useState , useEffect} from "react";
import style from "./form.module.css";
import ReCAPTCHA from 'react-google-recaptcha';

const form = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaValue) {
      // Process form submission
      console.log("Form submitted with reCAPTCHA value:", captchaValue);
    } else {
      console.error("Please complete the reCAPTCHA");
    }
  };
  return (
    <form className={style.form}>
      <div className="row">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Apellido</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className={`col-md-6 form-group my-2 mt-4 ${style.formgroup}`}>
          <label htmlFor="name">Fecha de Nacimiento</label>
          <input type="Date" id="email" name="email" className="form-control" placeholder="mm/dd/yy" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">No. de Cédula</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          Edad</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Sexo</label>
          <select className="form-select">
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Domicilio</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Teléfono.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Teléfono</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Correo Electrónico</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Nacionalidad</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <label htmlFor="name" className={style.lableC}>Estado Civil</label>
        <div className={`col-md-6 form-group my-2 ${style.formgroup} `}>
          <div className={style.set}>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Casada</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Divorciada</label>
            </span>
          </div>
          <div className={style.set}>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Soltera</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Unida</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Profesión
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Lugar donde Labora</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Desde que Fecha</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Ocupación Actual</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Ingreso Mensual</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Referencia Laboral</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Teléfono de la Referencia</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Correo Electrónico de la Referencia</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Ingreso Promedio Familiar</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
   
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Seguro Privado</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>SI</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Seguro Social</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>SI</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          En caso de responder si, indique el seguro privado
          </label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Tiene hijos</label>
          <div className={style.listCheck}>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>
              Propios</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>
Adoptados
</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Hijastros (as)</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>
              Fallecidos</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">
          Ha sido diagnosticado/a con alguna enfermedad
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Cuál o Cuáles
          </label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Drogas (Últimos 6 meses)</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Tabaco o Cigarrillos</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Alcohol</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Cocaína</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Marihuana</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Evaluación Psicológica</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Altura</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Peso (libras)</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <h1 className={style.formColHeading}>ANTECEDENTES MÉDICOS</h1>
        <div className={style.formColumn}>
          <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
            <label htmlFor="name">Ginecólogo/a</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control "
              placeholder="clinica"
            />
            <input
              type="text"
              id="name"
              name="name"
              className="form-control mt-2"
              placeholder="Doctor/a"
            />
          </div>
          <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
            <label htmlFor="name">Médico de Cabecera</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="clinica"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-2"
              placeholder="Doctor/a"

            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">
          Se ha sometido a tratamientos de fertilidad antes
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Inseminaciones Previas</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Cantidad</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Fecundación in vitro</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Cantidad</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">
          Su médico le ha sugerido Fecundación In Vitro por su condición
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          Hace cuanto tiempo está buscando un embarazo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">
          Embarazo Previo
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <h1 className={style.formColHeading}>ANTECEDENTES MÉDICOS</h1>
        <div className={style.formColumn}>
       
          <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
            <label htmlFor="name">En caso de haber sido tratada antes</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="clinica"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-2"
              placeholder="Doctor/a"

            />
            <input
              type="Date"
              id="email"
              name="email"
              className="form-control mt-2"
              placeholder="Doctor/a"

            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={style.formColumn}>
       
          <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
            <label htmlFor="name">Descripción del tratamiento o datos relevantes</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="clinica"
            />
        
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <h1 className={style.formColHeading}>ANTECEDENTES MÉDICOS</h1>
        <div className={style.formColumn}>
       
          <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
            <label htmlFor="name">Ha sido tratada por otra Clínica o Médico adicional</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="clinica"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-2"
              placeholder="Doctor/a"

            />
            <input
              type="Date"
              id="email"
              name="email"
              className="form-control mt-2"
              placeholder="Doctor/a"

            />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          ¿Toma algún medicamento actualmente? ¿Desde cuándo? ¿Cuál es el motivo?
          </label>
          <textarea rows={3} className="form-control" />
        </div>
      </div>
      <div className="row my-5">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <h1 >
          DATOS DE LA PAREJA O CÓNYUGE
          </h1>
        </div>
      </div>
      <div className="row">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Apellido</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className={`col-md-6 form-group my-2 mt-4 ${style.formgroup}`}>
          <label htmlFor="name">Fecha de Nacimiento</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">No. de Cédula</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          Edad</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Sexo</label>
          <select className="form-select">
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Domicilio</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Teléfono.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Teléfono</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Correo Electrónico</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Nacionalidad</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <label htmlFor="name" className={style.lableC}>Estado Civil</label>
        <div className={`col-md-6 form-group my-2 ${style.formgroup} `}>
          <div className={style.set}>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Casada</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Divorciada</label>
            </span>
          </div>
          <div className={style.set}>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Soltera</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Unida</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Profesión
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Lugar donde Labora</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Desde que Fecha</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Ocupación Actual</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Ingreso Mensual</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Referencia Laboral</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Teléfono de la Referencia</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Correo Electrónico de la Referencia</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Ingreso Promedio Familiar</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
   
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Seguro Privado</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>SI</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Seguro Social</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>SI</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          En caso de responder si, indique el seguro privado
          </label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Tiene hijos</label>
          <div className={style.listCheck}>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>
              Propios</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>
Adoptados
</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Hijastros (as)</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>
              Fallecidos</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">
          Ha sido diagnosticado/a con alguna enfermedad
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Cuál o Cuáles
          </label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Drogas (Últimos 6 meses)</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Tabaco o Cigarrillos</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Alcohol</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Cocaína</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Consumo de Marihuana</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup2} `}>
          <label htmlFor="name">Evaluación Psicológica</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>Si</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input mx-1"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Altura</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">Peso (libras)</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>

      <div className="row my-5">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <h1 >
          INFORMACIÓN ADICIONAL
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          Cuéntanos tu historia
          </label>
          <textarea rows={3} className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <label htmlFor="name">
          Cómo supiste de la Fundación Por Una Vida

          </label>
          <textarea rows={3} className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
          <p >
          Por este medio el aplicante declara bajo gravedad de juramento que toda la información arriba proporcionada es completa y cierta y se compromete a notificar cualquier modificación a la misma a la mayor brevedad posible. Acuerdo y acepto relevar e indemnizar a la FUNDACIÓN POR UNA VIDA y/o sus dignatarios, directores, empleados y agentes, de la responsabilidad u obligaciones de cualquier naturaleza que puedan surgir por proveer información incompleta, falsa o engañosa, que pueda derivar en alguna acción legal tomada basándose en una declaración contenida en el presente formulario.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroup}`}>
        <ReCAPTCHA
        sitekey="YOUR_SITE_KEY_HERE"
        onChange={handleSubmit}
      />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group my-2 ${style.formgroupbtn}`}>
          <button >
             ENVIAR
          </button>
        </div>
      </div>
    </form>
  );
};

export default form;
