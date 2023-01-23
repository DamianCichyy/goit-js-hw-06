const input = document.querySelector("#validation-input");

const inputLength = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  if (input.value.length === inputLength) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
});
