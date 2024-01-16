import React from "react";
import './App.css';
const Form = () => {

      
  return (
    <div className='d-flex flex flex-wrap justify-around'>
      
      <div className="card" id="cardform">
    <div className="p-2">
      <header>Student Registration</header>
      <form
        autoComplete="off"
        // onSubmit={onFormSubmit}
        className="form-group"
      >
        <div class="fields">
          <div class="input_field">
            <label for="fullName">
              Full Name<span class="ast">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              class="form-control"
              oninput="validateFullName(this)"
            />
            <div id="fullNameError" class="error-message"></div>
          </div>
          <div class="input_field">
            <label for="dob">
              DOB<span class="ast">*</span>
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              class="form-control"
              oninput="validateDOB(this)"
            />
            <div id="dobError" class="error-message"></div>
          </div>
          <div class="input_field">
            <label for="age">
              Age<span class="ast">*</span>
            </label>
            <input
              type="number"
              name="age"
              id="age"
              class="form-control"
              oninput="validateAge(this)"
            />
            <div id="ageError" class="error-message"></div>
          </div>
          <div class="input_field">
            <label for="email">
              E-mail<span class="ast">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              oninput="validateEmail(this)"
            />
            <div id="emailError" class="error-message"></div>
          </div>
          <div class="input_field">
            <label for="mobileno">
              Mobile No.<span class="ast">*</span>
            </label>
            <input
              type="text"
              name="mobileno"
              id="mobileno"
              class="form-control"
              oninput="validateMobileNo(this)"
            />
            <div id="mobilenoError" class="error-message"></div>
          </div>
          <div class="gender">
            <label for="">
              Gender:<span class="ast">*</span>
            </label>
            <input
              type="radio"
              name="gender"
              id=""
              value="female"
              class="form-control"
              oninput="validateGender(this)"
            />
            female
            <input
              type="radio"
              name="gender"
              id=""
              value="male"
              class="form-control"
              oninput="validateGender(this)"
            />
            male
            <input
              type="radio"
              name="gender"
              id=""
              value="others"
              class="form-control"
              oninput="validateGender(this)"
            />
            others
            <div id="genderError" class="error-message"></div>
          </div>
          <div class="input_field">
            <label for="address">
              Address<span class="ast">*</span>
            </label>
            <textarea
              name="address"
              id="address"
              cols="47"
              rows="3"
              oninput="validateAddress(this)"
            ></textarea>
            <div id="addressError" class="error-message"></div>
          </div>
        </div>
        <div className="form_action--button">
          <input
            type="submit"
            id="submit"
            value="Submit"
            className="btn btn-success"
          />
          <input
            type="reset"
            id="reset"
            value="Reset"
            className="btn btn-warning"
          />
        </div>
      </form>
    </div>
  </div></div>
  )
}

export default Form