// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option, variables
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit forms using reference instead of an empty function
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********
function addItem(e) {
  e.preventDefault();
  // access the value of the input
  // console.log(grocery.value);
  const value = grocery.value;
  // short cut to get unique ID for item before adding to the list
  const id = new Date().getTime().toString();

  // (value && !editFlag)
  if (value !== "" && editFlag === false) {
    const element = document.createElement("article");
    // add class to the newly created article element
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    // add the id to the element
    element.setAttributeNode(attr);
    // add it to the HTML element
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
      <button></button>
    </div>`;
    // append child....add it to the list
    list.appendChild(element);
    // display alert
    displayAlert("Item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // (value && editFlag)
  } else if (value !== "" && editFlag === true) {
    console.log("Edit values");
  } else {
    displayAlert("please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // set time out funciton to remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ****** SETUP ITEMS **********
