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

  const counter = () => {
    sessionStorage.setItem("ET", JSON.parse(sessionStorage.getItem("ET")) + 1);
  };

  setInterval(counter, 1000);
});

const preLoadText = (input) => {
  const storedText = localStorage.getItem("Name");
  if (storedText && input) {
    input.value = storedText;
  }
};
