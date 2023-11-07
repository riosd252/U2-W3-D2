window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("username");
  const btnSave = document.getElementById("save");
  const btnRemove = document.getElementById("remove");

  btnSave.onclick = () => {
    const inputValue = input.value;
    localStorage.setItem("Name", inputValue);
  };

  btnRemove.onclick = () => {
    localStorage.removeItem("Name");
    input.value = "";
  };

  preLoadText(input);
});

const preLoadText = (input) => {
  const storedText = localStorage.getItem("Name");
  if (storedText && input) {
    input.value = storedText;
  }
};

let counter = null;

const counterProgress = () => {
  counter += 1;
  sessionStorage.setItem("ET", counter);
  localStorage.setItem("ET", counter);
};

const myCounter = setInterval(counterProgress, 1000);

const counterKeep = () => {
  if (localStorage.getItem("ET")) {
    counter = JSON.parse(localStorage.getItem("ET"));
    myCounter;
  } else {
    myCounter;
  }
};

window.onload = counterKeep;
