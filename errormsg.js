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