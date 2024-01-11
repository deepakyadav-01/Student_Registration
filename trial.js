// form validation and data entry
var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (validateForm(formData) === true) {
    if (selectedRow === null) {
      insertNewRecord(formData);
      showToast("data added!","success",5000);
    } else {
      updateRecord(formData);
      showToast("details updated","info",5000);
    }

    resetForm();
  }
}

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
    !input.value.trim().match(/^[1-9][0-9]{9}$/) ||
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
function resetErrorMessages() {
  // Reset error messages by removing 'error' class and clearing the content
  var formElements = document.querySelectorAll(".form-control");
  formElements.forEach(function (element) {
    element.classList.remove("error");
    var errorMessageElement = element.nextElementSibling;
    if (
      errorMessageElement &&
      errorMessageElement.classList.contains("error-message")
    ) {
      errorMessageElement.textContent = "";
    }
  });
}

function displayErrorMessage(elementId, errorMessage) {
  // Display error message in the placeholder and add 'error' class
  var element = document.getElementById(elementId);
  element.placeholder = errorMessage;
  element.classList.add("error");

  // Create or update error message element
  var errorMessageElement = element.nextElementSibling;
  if (
    !errorMessageElement ||
    !errorMessageElement.classList.contains("error-message")
  ) {
    errorMessageElement = document.createElement("div");
    errorMessageElement.classList.add("error-message");
    // element.parentNode.insertBefore(errorMessageElement, element.nextSibling);
  }
  errorMessageElement.textContent = errorMessage;
}
// save data to table
function saveDataToLocalStorage() {
  var tableRows = document.getElementById("studentList").rows;
  var data = [];

  for (var i = 1; i < tableRows.length; i++) {
    var rowData = {
      fullName: tableRows[i].cells[0].innerHTML,
      dob: tableRows[i].cells[1].innerHTML,
      age: tableRows[i].cells[2].innerHTML,
      email: tableRows[i].cells[3].innerHTML,
      mobileno: tableRows[i].cells[4].innerHTML,
      gender: tableRows[i].cells[5].innerHTML,
      address: tableRows[i].cells[6].innerHTML,
    };
    data.push(rowData);
  }
  localStorage.setItem("studentData", JSON.stringify(data));
}
function loadDataFromLocalStorage() {
  var storedData = localStorage.getItem("studentData");

  if (storedData) {
    var data = JSON.parse(storedData);

    for (var i = 0; i < data.length; i++) {
      insertNewRecord(data[i]);
    }
  }
}

// Event listener to load data from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
  loadDataFromLocalStorage();
});

// new code ends here
// read data from the form
function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["dob"] = document.getElementById("dob").value;
  formData["age"] = document.getElementById("age").value;
  formData["email"] = document.getElementById("email").value;
  formData["mobileno"] = document.getElementById("mobileno").value;
  formData["gender"] = document.querySelector('input[name="gender"]:checked')
    ? document.querySelector('input[name="gender"]:checked').value
    : "";
  formData["address"] = document.getElementById("address").value;

  return formData;
}
// insert new data to the table
function insertNewRecord(data) {
  var table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.dob;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.age;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.email;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.mobileno;
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.gender;
  var cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.address;
  var cell8 = newRow.insertCell(7);
  cell8.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-success' id='edit_btn'>Edit</a>
                <a href="#" onClick='onDelete(this)' class='btn-danger' id='delete_btn'>Delete</a>`;
  for (let i = 0; i < newRow.cells.length - 1; i++) {
    newRow.cells[i].onclick = function () {
      onEditit(this, i);
    };
  }
  
  saveDataToLocalStorage();
}
// reset form
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobileno").value = "";
  var radioButtons = document.getElementsByName("gender");
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  document.getElementById("address").value = "";
  //    dont remove
  document.getElementById("fullNameError").value = "";
  document.getElementById("dobError").value = "";
  document.getElementById("ageError").value = "";
  document.getElementById("emailError").value = "";
  document.getElementById("mobilenoError").value = "";

  document.getElementById("genderError").value = "";
  document.getElementById("addressError").value = "";
  // dont remove
  showToast("details reseted","info",5000);
  // Clear error messages
  selectedRow = null;
}
// edit form
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("dob").value = selectedRow.cells[1].innerHTML;
  document.getElementById("age").value = selectedRow.cells[2].innerHTML;
  document.getElementById("email").value = selectedRow.cells[3].innerHTML;
  document.getElementById("mobileno").value = selectedRow.cells[4].innerHTML;
  var genderValue = selectedRow.cells[5].innerHTML;
  var radioButtons = document.getElementsByName("gender");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === genderValue) {
      radioButtons[i].checked = true;
    }
  }
  document.getElementById("address").value = selectedRow.cells[6].innerHTML;
  document.getElementById("submit").value = "Update";
}
// update form record
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.dob;
  selectedRow.cells[2].innerHTML = formData.age;
  selectedRow.cells[3].innerHTML = formData.email;
  selectedRow.cells[4].innerHTML = formData.mobileno;
  selectedRow.cells[5].innerHTML = formData.gender;
  selectedRow.cells[6].innerHTML = formData.address;
  document.getElementById("submit").value = "Submit";
  saveDataToLocalStorage();
}
// delete form record
function onDelete(td) {
  if (confirm("Are you sure you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
    showToast("details deleted","danger",5000);
    resetForm();
  }
  saveDataToLocalStorage();
}

//  for adding color changes
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to each color option
  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById("submit").style.backgroundColor = color;
    document.getElementById("reset").style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  }

  // Add click event listeners to each color option
  document.getElementById("brown").addEventListener("click", function () {
    setBackgroundColor("#76453B");
  });

  document.getElementById("purple").addEventListener("click", function () {
    setBackgroundColor("#5D3587");
  });

  document.getElementById("def").addEventListener("click", function () {
    setBackgroundColor("#4070f4");
  });
  // Load color from local storage on page load
  var storedColor = localStorage.getItem("backgroundColor");
  if (storedColor) {
    setBackgroundColor(storedColor);
  }
  var cardForm = document.getElementById("cardform");
  var cardTable = document.getElementById("cardtable");
  cardForm.addEventListener("mouseover", function () {
    cardForm.style.transform = "scale(1.03)";
  });
  cardForm.addEventListener("mouseout", function () {
    cardForm.style.transform = "scale(1)";
  });
  cardTable.addEventListener("mouseover", function () {
    cardTable.style.transform = "scale(1.03)";
  });
  cardTable.addEventListener("mouseout", function () {
    cardTable.style.transform = "scale(1)";
  });




});

function onEditit(td, columnIndex) {
  // Enable inline editing for the specific cell in the selected row
  selectedRow = td.parentElement;

  let cell = selectedRow.cells[columnIndex];
  let oldValue = cell.innerHTML;

  // Create an input element and set its value to the current cell content
  let input = document.createElement("input");
  // input.type = 'text';
  input.value = oldValue;

  // Add an onblur event to save the changes when the user clicks outside the input
  input.addEventListener("blur", function () {
    updateCellValue(cell, input.value);
  });

  // Replace the cell content with the input element
  cell.innerHTML = "";
  cell.appendChild(input);

  // Focus on the input element to allow immediate editing
  input.focus();
}

function updateCellValue(cell, newValue) {
    showToast("details updated!","success",5000)
  // Update the cell value
  cell.innerHTML = newValue;
}

//employee table card animation
var card_emplist = document.getElementById("cardTable");

card_emplist.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.03)";
});

card_emplist.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

//table row animations

var table = document.getElementById("studentList");
var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

for (var i = 0; i <= rows.length; i++) {
  rows[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "white";
  });

  rows[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  
}
