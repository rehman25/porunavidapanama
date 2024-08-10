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
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className={`col-md-6 form-group mt-4 ${style.formgroup}`}>
          <label htmlFor="name">Last Name</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">ID No.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Age</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Sex</label>
          <select className="form-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Home</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Phone.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Cell Phone</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Email.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Nationality</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <label htmlFor="name">Civil Status</label>
        <div className={`col-md-6 form-group ${style.formgroup} `}>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>Married</label>
          </span>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>Divorcee</label>
          </span>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>Single Woman</label>
          </span>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>United</label>
          </span>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Nationality</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Place where you work</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Since that date</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Current occupation</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Monthly income</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Current occupation</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Monthly income</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Work reference</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Reference Phone</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Reference Email</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Average Family Income</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Social Security</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yes</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Social Security</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yes</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">
            If you answer yes, indicate the private insurance
          </label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Social Security</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Own</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Adopted</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Stepchildren</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Deaths</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">
            Have you been diagnosed with any disease?
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">Which</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Drug Use (Last 6 months)</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Tobacco or Cigarette Consumption</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">TAlcohol Consumption</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Cocaine use</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Marijuana Consumption</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Psychological evaluation</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Height</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Weight (lbs)</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <h1 className={style.formColHeading}>MEDICAL HISTORY</h1>
        <div className={style.formColumn}>
          <div className={`col-md-6 form-group ${style.formgroup}`}>
            <label htmlFor="name">Gynecologist</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control "
            />
            <input
              type="text"
              id="name"
              name="name"
              className="form-control mt-2"
            />
          </div>
          <div className={`col-md-6 form-group ${style.formgroup}`}>
            <label htmlFor="name">GP</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-2"
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">
            Have you undergone fertility treatments before?
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Previous Inseminations</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Amount</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">In vitro fertilization</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Amount</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">
            Your doctor has suggested In Vitro Fertilization for your condition
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">
            Description of the treatment or relevant data
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
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">
            Are you currently taking any medication? Since when? What is the
            reason?
          </label>
          <textarea rows={3} className="form-control" />
        </div>
      </div>
      <div className="row my-5">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <h1 >
          PARTNER OR SPOUSE DATA
          </h1>
        </div>
      </div>
      <div className="row">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className={`col-md-6 form-group mt-4 ${style.formgroup}`}>
          <label htmlFor="name">Last Name</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">ID No.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Age</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Sex</label>
          <select className="form-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Home</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Phone.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Cell Phone</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Email.</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Nationality</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <label htmlFor="name">Civil Status</label>
        <div className={`col-md-6 form-group ${style.formgroup} `}>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>Married</label>
          </span>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>Divorcee</label>
          </span>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>Single Woman</label>
          </span>
          <span className={style.check}>
            <input
              type="Radio"
              id="name"
              name="name"
              className="form-check-input"
            />
            <label>United</label>
          </span>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Nationality</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Place where you work</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Since that date</label>
          <input type="Date" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Current occupation</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Monthly income</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Current occupation</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Monthly income</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Work reference</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Reference Phone</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Reference Email</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Average Family Income</label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Social Security</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yes</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Social Security</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yes</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">
            If you answer yes, indicate the private insurance
          </label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Social Security</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Own</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Adopted</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Stepchildren</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Deaths</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">
            Have you been diagnosed with any disease?
          </label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">Which</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Drug Use (Last 6 months)</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Tobacco or Cigarette Consumption</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">TAlcohol Consumption</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Cocaine use</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Marijuana Consumption</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
        <div className={`col-md-6 form-group ${style.formgroup2} `}>
          <label htmlFor="name">Psychological evaluation</label>
          <div className="">
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>Yeah</label>
            </span>
            <span className={style.check}>
              <input
                type="Radio"
                id="name"
                name="name"
                className="form-check-input"
              />
              <label>No</label>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Height</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className={`col-md-6 form-group ${style.formgroup}`}>
          <label htmlFor="name">Weight (lbs)</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>

      <div className="row my-5">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <h1 >
          ADDITIONAL INFORMATION
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">
          Tell us your story
          </label>
          <textarea rows={3} className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <label htmlFor="name">
          How did you hear about the For a Life Foundation?

          </label>
          <textarea rows={3} className="form-control" />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
          <p >
            The applicant hereby declares under oath that all the information provided above is complete and true and undertakes to notify any changes to it as soon as possible. I agree and accept to release and indemnify FUNDACIÓN POR UNA VIDA and/or its officers, directors, employees and agents, from liability or obligations of any nature that may arise from providing incomplete, false or misleading information, which may result in any legal action taken based on a statement contained in this form.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroup}`}>
        <ReCAPTCHA
        sitekey="YOUR_SITE_KEY_HERE"
        onChange={handleSubmit}
      />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`col-md-12 form-group ${style.formgroupbtn}`}>
          <button >
             Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default form;
