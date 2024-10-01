document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const tableBody = document.getElementById("tableBody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector(
      'input[name="genderRadio"]:checked'
    ).value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const selectedFoods = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach(function (checkbox) {
        selectedFoods.push(checkbox.value);
      });

    if (selectedFoods.length < 2) {
      alert("Please select at least two food options.");
      return;
    }

    const row = document.createElement("tr");

    const fields = [
      firstName,
      lastName,
      email,
      address,
      pincode,
      gender,
      selectedFoods.join(", "),
      state,
      country,
    ];
    fields.forEach((field) => {
      const cell = document.createElement("td");
      cell.textContent = field;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
    form.reset();
  });
});
