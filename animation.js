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
  