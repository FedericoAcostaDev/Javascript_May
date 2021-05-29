/* DECLARATIONS */
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.getElementById("totalList").children;




function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addDoneAfterClick(event) {
  event.target.classList.add("done");
}

function removeDoneAfterClick(event) {
  event.target.classList.remove("done");
}

function decideClickFunction(event) {
  if (event.target.classList.contains("done")) {
    removeDoneAfterClick(event);
  } else {
    addDoneAfterClick(event);
  }
}

/* CODE EXECUTION */

for (var i = 0; i < lis.length; i++) {
  // CHECKBOX CREATION
  var checkbox = document.createElement("input");
checkbox.type = "checkbox";
  lis[i].appendChild(checkbox);

  // EVENT LISTENER
  lis[i].addEventListener(
    "click",
    function (event) {
      console.log(event.target.tagName);
      if (event.target.tagName === "LI") {
        console.log("si se ejecuto");
        event.target.classList.toggle("done");
      }
    },
    false
  );
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
