let submitButtonElement = document.querySelector(".submit-button");
let row = 1;
submitButtonElement.addEventListener("click", function () {
  let firstnameElement = document.getElementById("firstname").value;
  let lastnameElement = document.getElementById("lastname").value;
  let addressElement = document.getElementById("address").value;
  let pincodeElement = document.getElementById("pincode").value;
  let stateElement = document.getElementById("state").value;
  let countryElement = document.getElementById("country").value;
  let maleElement = document.getElementById("male").value;
  let femaleElement = document.getElementById("female").value;
  let foodElement = document.getElementById("food").value;

  if (
    !firstnameElement ||
    !lastnameElement ||
    !addressElement ||
    !pincodeElement ||
    !stateElement ||
    !countryElement ||
    !maleElement ||
    !femaleElement ||
    !foodElement
  ) {
    alert("Fill all the boxes");
    return;
  }

  let displayElement = document.querySelector(".myTable");
  let newRow = displayElement.insertRow(row);
  let newCell = newRow.insertCell(0);
  let newcell2 = newRow.insertCell(1);
  let newCell3 = newRow.insertCell(2);
  let newCell4 = newRow.insertCell(3);
  let newCell5 = newRow.insertCell(4);
  let newcell6 = newRow.insertCell(5);
  let newCell7 = newRow.insertCell(6);
  let newCell8 = newRow.insertCell(7);
  let newCell9 = newRow.insertCell(8);

  newCell.innerHTML = firstnameElement;
  newcell2.innerHTML = lastnameElement;
  newCell3.innerHTML = addressElement;
  newCell4.innerHTML = pincodeElement;
  newCell5.innerHTML = stateElement;
  newcell6.innerHTML = countryElement;
  newCell7.innerHTML = maleElement;
  newCell8.innerHTML = femaleElement;
  newCell9.innerHTML = foodElement;

  row++;
});
