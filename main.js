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
