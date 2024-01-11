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
  