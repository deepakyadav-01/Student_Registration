let selectedRow = null;

const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = readFormData();
    if (validateForm(formData)) {
        selectedRow === null ? insertNewRecord(formData) : updateRecord(formData);
        resetForm();
    }
};

const validateFullName = (input) => {
    const fullNameError = document.getElementById("fullNameError");
    input.value.trim() === '' ? fullNameError.innerHTML = 'Please enter your fullname' : fullNameError.innerHTML = '';
};

const validateDOB = (input) => {
    const dobError = document.getElementById("dobError");
    input.value.trim() === '' ? dobError.innerHTML = 'Please select your Date of Birth!' : dobError.innerHTML = '';
};

const validateAge = (input) => {
    const ageError = document.getElementById("ageError");
    input.value.trim() === '' || input.value.trim() < 1 ? ageError.innerHTML = 'Please enter your age' : ageError.innerHTML = '';
};

const validateEmail = (input) => {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (!input.value.trim().match(emailRegex) || input.value.trim() === "") ? emailError.innerHTML = 'Please enter a valid email!' : emailError.innerHTML = '';
};

const validateMobileNo = (input) => {
    const mobilenoError = document.getElementById("mobilenoError");
    const mobileRegex = /^[1-9][0-9]{9}$/;
    (!input.value.trim().match(mobileRegex) || input.value.trim() === "") ? mobilenoError.innerHTML = "Please enter your number" : mobilenoError.innerHTML = '';
};

const validateGender = () => {
    const genderError = document.getElementById("genderError");
    const radioButtons = document.getElementsByName('gender');
    const checked = Array.from(radioButtons).some(rb => rb.checked);

    !checked ? genderError.innerHTML = 'Please select your gender' : genderError.innerHTML = '';
};

const validateAddress = (input) => {
    const addressError = document.getElementById("addressError");
    input.value.trim() === '' ? addressError.innerHTML = 'Please enter your address' : addressError.innerHTML = '';
};

const validateForm = (formData) => {
    validateFullName(document.getElementById('fullName'));
    validateDOB(document.getElementById('dob'));
    validateAge(document.getElementById('age'));
    validateEmail(document.getElementById('email'));
    validateMobileNo(document.getElementById('mobileno'));
    validateGender();
    validateAddress(document.getElementById('address'));

    const errorMessages = document.querySelectorAll('.error-message');
    return !Array.from(errorMessages).some(errorMessage => errorMessage.innerHTML !== '');
};

const resetErrorMessages = () => {
    const formElements = document.querySelectorAll('.form-control');
    formElements.forEach((element) => {
        element.classList.remove('error');
        const errorMessageElement = element.nextElementSibling;
        if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
            errorMessageElement.textContent = '';
        }
    });
};

const displayErrorMessage = (elementId, errorMessage) => {
    const element = document.getElementById(elementId);
    element.placeholder = errorMessage;
    element.classList.add('error');

    let errorMessageElement = element.nextElementSibling;
    if (!errorMessageElement || !errorMessageElement.classList.contains('error-message')) {
        errorMessageElement = document.createElement('div');
        errorMessageElement.classList.add('error-message');
    }
    errorMessageElement.textContent = errorMessage;
};

const saveDataToLocalStorage = () => {
    const tableRows = document.getElementById("studentList").rows;
    const data = [];

    for (let i = 1; i < tableRows.length; i++) {
        const rowData = {
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
};

const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("studentData");

    if (storedData) {
        const data = JSON.parse(storedData);

        for (let i = 0; i < data.length; i++) {
            insertNewRecord(data[i]);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadDataFromLocalStorage();
});

const readFormData = () => {
    const formData = {
        fullName: document.getElementById("fullName").value,
        dob: document.getElementById("dob").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        mobileno: document.getElementById("mobileno").value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        address: document.getElementById("address").value
    };

    return formData;
};

const insertNewRecord = (data) => {
    const table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);

    for (let i = 0; i < Object.values(data).length; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = Object.values(data)[i];
    }

    const cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-success'>Edit</a>
                        <a href="#" onClick='onDelete(this)' class='btn-danger'>Delete</a>`;

    for (let i = 0; i < newRow.cells.length - 1; i++) {
        newRow.cells[i].onclick = function () {
            onEditit(this, i);
        };
    }

    saveDataToLocalStorage();
};

const updateRecord = (formData) => {
    for (let i = 0; i < Object.values(formData).length; i++) {
        selectedRow.cells[i].innerHTML = Object.values(formData)[i];
    }

    document.getElementById('submit').value = 'Submit';
    saveDataToLocalStorage();
};

const resetForm = () => {
    const formElements = ['fullName', 'dob', 'age', 'email', 'mobileno', 'gender', 'address'];
    
    formElements.forEach(elementId => {
        document.getElementById(elementId).value = '';
        if (elementId === 'gender') {
            const radioButtons = document.getElementsByName(elementId);
            radioButtons.forEach(rb => rb.checked = false);
        }
    });

    selectedRow = null;
    resetErrorMessages();
};

const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    const formElements = ['fullName', 'dob', 'age', 'email', 'mobileno', 'address'];

    formElements.forEach((elementId, index) => {
        document.getElementById(elementId).value = selectedRow.cells[index].innerHTML;
    });

    const genderValue = selectedRow.cells[5].innerHTML;
    const radioButtons = document.getElementsByName('gender');
    radioButtons.forEach(rb => {
        if (rb.value === genderValue) {
            rb.checked = true;
        }
    });

    document.getElementById('submit').value = 'Update';
};

const onDelete = (td) => {
    if (confirm('Are you sure you want to delete this record?')) {
        const row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
        resetForm();
    }
    saveDataToLocalStorage();
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('brown').addEventListener('click', () => {
        document.body.style.backgroundColor = '#76453B';
        document.getElementById('submit').style.backgroundColor = '#76453B';
        document.getElementById('reset').style.backgroundColor = '#76453B';
    });

    document.getElementById('purple').addEventListener('click', () => {
        document.body.style.backgroundColor = '#5D3587';
        document.getElementById('submit').style.backgroundColor = '#5D3587';
        document.getElementById('reset').style.backgroundColor = '#5D3587';
    });

    document.getElementById('def').addEventListener('click', () => {
        document.body.style.backgroundColor = '#4070f4';
        document.getElementById('submit').style.backgroundColor = '#4070f4';
        document.getElementById('reset').style.backgroundColor = '#4070f4';
    });
});

const onEditit = (td, columnIndex) => {
    selectedRow = td.parentElement;

    const cell = selectedRow.cells[columnIndex];
    const oldValue = cell.innerHTML;

    const input = document.createElement('input');
    input.value = oldValue;

    input.addEventListener('blur', () => {
        updateCellValue(cell, input.value);
    });

    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();
};

const updateCellValue = (cell, newValue) => {
    cell.innerHTML = newValue;
};