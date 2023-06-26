// Load the JSON data
const dataURL = "./data.json";

// Global variable to store the loaded data
let Cdata = [];

// Function to fetch the JSON data
function loadData() {
  fetch(dataURL)
    .then((response) => response.json())
    .then((jsonData) => {
      Cdata = jsonData;
      setupAutocomplete();
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

// Function to setup the autocomplete input
function setupAutocomplete() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", handleSearchInput);
}

// Function to handle search input changes
function handleSearchInput(event) {
  const inputValue = event.target.value.trim().toUpperCase();
  const filteredData = Cdata.filter((item) => item.Sno.includes(inputValue));
  displayData(filteredData);
}
const classes = [
  "table-primary",
  "table-secondary",
  "table-success",
  "table-danger",
  "table-warning",
  "table-info",
  "table-dark",
];

// const randomClass = classes[Math.floor(Math.random() * classes.length)];

// Function to display the selected data
function displayData(data) {
  const dataContainer = document.getElementById("dataContainer");

  // Clear previous data
  dataContainer.innerHTML = "";

  // Create and append the data elements
  data.forEach((item) => {
    const div = document.createElement("div");
    /*<table class="table">
  <thead>
  
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>*/
    div.innerHTML = `
    <table class="table">
    <tbody>
    <tr class="${classes[
      Math.floor(Math.random() * classes.length)
    ].toString()}">
      <th scope="row">Serial Number:</th>
      <td>${item.Sno}</td>
    </tr>
    
    <tr>
      <th scope="row">Date of Birth: </th>
      <td>${item.DOB}</td>
    </tr>
    
    <tr>
      <th scope="row">Date of Calving:</th>
      <td>${item.DOC}</td>
    </tr>
    
    <tr>
      <th scope="row">Parity:</th>
      <td>${item.Parity}</td>
    </tr>
    
    <tr>
      <th scope="row">Sex:</th>
      <td> ${item.Sex}</td>
    </tr>
    </tbody>
    </table> `;
    dataContainer.appendChild(div);
  });
}

// Load the data and set up the autocomplete
loadData();
