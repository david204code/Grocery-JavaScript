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
    console.log("Adding values");
    // (value && editFlag)
  } else if (value !== "" && editFlag === true) {
    console.log("Edit values");
  } else {
    console.log("empty value");
  }
}

// ****** SETUP ITEMS **********
