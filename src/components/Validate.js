// Validate.js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilenoRegex = /^[6-9][0-9]{9}$/;

export const validateField = (fieldName, value) => {
  if (!value || !value.trim()) {
    return `${fieldName} is required`;
  } else if (fieldName === 'email' && !emailRegex.test(value)) {
    return 'Invalid email format';
  } else if (fieldName === 'mobileno' && !mobilenoRegex.test(value)) {
    return 'Invalid phone number format';
  }
  else if (fieldName === 'age') {
    const numericValue = parseInt(value, 10);
    if (numericValue < 0) {
      return 'Age cannot be negative';
    } else if (numericValue > 90) {
      return 'Age should not be greater than 90';
    }
  }
 else {
    return '';
  }
};

export const validateForm = (formData) => {
  const formErrors = {};

  Object.keys(formData).forEach((fieldName) => {
    const fieldValue = formData[fieldName];
    const error = validateField(fieldName, fieldValue);
    if (error) {
      formErrors[fieldName] = error;
    }
  });

  return formErrors;
};
