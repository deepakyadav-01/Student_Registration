function validateFullName(input) {
    var fullNameError = document.getElementById("fullNameError");
    if (input.value.trim() === "") {
      fullNameError.innerHTML = "please enter your fullname";
    } else {
      fullNameError.innerHTML = "";
    }
  }
  
  function validateDOB(input) {
    var dobError = document.getElementById("dobError");
    if (input.value.trim() === "") {
      dobError.innerHTML = "Please select your Date of Birth!";
    } else {
      dobError.innerHTML = "";
    }
  }
  
  function validateAge(input) {
    var ageError = document.getElementById("ageError");
    if (input.value.trim() === "" || input.value.trim() < 1) {
      ageError.innerHTML = "Please enter your age";
    } else {
      ageError.innerHTML = "";
    }
  }
  
  function validateEmail(input) {
    var emailError = document.getElementById("emailError");
    if (
      !input.value
        .trim()
        .match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ||
      input.value.trim() === ""
    ) {
      emailError.innerHTML = "Please enter a valid email!";
    } else {
      emailError.innerHTML = "";
    }
  }
  
  function validateMobileNo(input) {
    var mobilenoError = document.getElementById("mobilenoError");
    if (
      !input.value.trim().match(/^[6-9][0-9]{9}$/) ||
      input.value.trim() === ""
    ) {
      mobilenoError.innerHTML = "please enter your number";
    } else {
      mobilenoError.innerHTML = "";
    }
  }
  
  function validateGender() {
    var genderError = document.getElementById("genderError");
    var radioButtons = document.getElementsByName("gender");
    var checked = false;
  
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        checked = true;
        break;
      }
    }
  
    if (!checked) {
      genderError.innerHTML = "Please select your gender";
    } else {
      genderError.innerHTML = "";
    }
  }
  
  function validateAddress(input) {
    var addressError = document.getElementById("addressError");
    if (input.value.trim() === "") {
      addressError.innerHTML = "Please enter your address";
    } else {
      addressError.innerHTML = "";
    }
  }
  
  function validateForm(formData) {
    validateFullName(document.getElementById("fullName"));
    validateDOB(document.getElementById("dob"));
    validateAge(document.getElementById("age"));
    validateEmail(document.getElementById("email"));
    validateMobileNo(document.getElementById("mobileno"));
    validateGender();
    validateAddress(document.getElementById("address"));
  
    var errorMessages = document.querySelectorAll(".error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      if (errorMessages[i].innerHTML !== "") {
        return false;
      }
    }
    return true;
  }