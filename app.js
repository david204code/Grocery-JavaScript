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

// clear items, reset
clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********

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
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    // append child....add it to the list
    list.appendChild(element);
    // display alert
    displayAlert("Item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add/save item to local storage
    addToLocalStorage(id, value);
    // set back/list to default
    setBackToDefault();
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

// clear items function
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  // remove the clearItem container when items are clear
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete funciton
function deleteItem() {
  console.log("item deleted");
}

// edit funciton
function editItem() {
  console.log("edit item");
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}

// ****** SETUP ITEMS **********
