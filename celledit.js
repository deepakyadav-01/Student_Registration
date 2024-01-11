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
  