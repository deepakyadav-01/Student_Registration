import React, { useState } from 'react';
import './App.css';
import { toast } from 'react-toastify';
const Form = ({ onFormSubmit, selectedStudent }) => {
  const initialFormData = {
    fullName: '',
    dob: '',
    age: '',
    email: '',
    mobileno: '',
    gender: '',
    address: '',
  };

  const [formData, setFormData] = useState(selectedStudent ?? initialFormData);
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    dob: '',
    age: '',
    email: '',
    mobileno: '',
    gender: '',
    address: '',
  });
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobilenoRegex = /^[6-9][0-9]{9}$/;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    if (!value || !value.trim()) {
      setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: `${fieldName} is required` }));
      return false;
    } 
    else if (fieldName === 'email' && !emailRegex.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      return false;
    }

    else if (fieldName === 'mobileno' && !mobilenoRegex.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, mobileno: 'Invalid phone number format' }));
      return false;
    }

    else {
      setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      onFormSubmit(e, formData);
      setFormData(selectedStudent);
    }
  };
  const handleReset = () => {
    // Reset the form data to its initial state
    setFormData(initialFormData);
    toast.success('Form Resseted successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const validateForm = () => {
    let isFormValid = true;

    Object.keys(formData).forEach((fieldName) => {
      const fieldValue = formData[fieldName];
      const isValid = validateField(fieldName, fieldValue);

      if (!isValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  };

  return (
      <div className="card" id="cardform">
        <div className="p-2 ">
          <header>Student Registration</header>
          <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
            <div className="fields">
              <div className="input_field">
                <label htmlFor="fullName">
                  Full Name<span className="ast">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.fullName || ''}
                />
                <div className="error-message">{formErrors.fullName}</div>
              </div>

              <div className="input_field">
                <label htmlFor="dob">
                  DOB<span className="ast">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.dob || ''}
                />
                <div className="error-message">{formErrors.dob}</div>
              </div>

              <div className="input_field">
                <label htmlFor="age">
                  Age<span className="ast">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.age || ''}
                />
                <div className="error-message">{formErrors.age}</div>
              </div>

              <div className="input_field">
                <label htmlFor="email">
                  E-mail<span className="ast">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.email || ''}
                />
                <div className="error-message">{formErrors.email}</div>
              </div>

              <div className="input_field">
                <label htmlFor="mobileno">
                  Mobile No.<span className="ast">*</span>
                </label>
                <input
                  type="text"
                  name="mobileno"
                  id="mobileno"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.mobileno || ''}
                />
                <div className="error-message">{formErrors.mobileno}</div>
              </div>

              <div className="gender">
                <label htmlFor="gender">
                  Gender:<span className="ast">*</span>
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="form-control"
                    onChange={handleInputChange}
                    checked={formData.gender === 'female' || ''}
                  />
                  <label htmlFor="female" className="text-sm mr-4">
                    Female
                  </label>

                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    className="form-control"
                    onChange={handleInputChange}
                    checked={formData.gender === 'male' || ''}
                  />
                  <label htmlFor="male" className="text-sm mr-4">
                    Male
                  </label>

                  <input
                    type="radio"
                    name="gender"
                    id="others"
                    value="others"
                    className="form-control"
                    onChange={handleInputChange}
                    checked={formData.gender === 'others' || ''}
                  />
                  <label htmlFor="others" className="text-sm">
                    Others
                  </label>
                </div>
                <div className="error-message">{formErrors.gender}</div>
              </div>

              <div className="input_field">
                <label htmlFor="address">
                  Address<span className="ast">*</span>
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="3"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.address || ''}
                ></textarea>
                <div className="error-message">{formErrors.address}</div>
              </div>
            </div>
            <div className="form_action--button">
              <input type="submit" id="submit" value="Submit" className="btn btn-success" />
              <input type="reset" id="reset" value="Reset" className="btn btn-warning" onClick={handleReset} />
            </div>
          </form>
        </div>
      </div>
  );
};

export default Form;
