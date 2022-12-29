let counter = 0;
const counterValue = document.querySelector("#value");

const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");

const updateValue = () => {
  console.log(`Counter: ${counter}`);
  counterValue.textContent = counter;
};

const incrementValue = () => {
  console.log("Increment button was clicked!");
  counter++;
  updateValue();
};

const decrementValue = () => {
  console.log("Decrement button was clicked!");
  counter--;
  updateValue();
};

minusButton.addEventListener("click", decrementValue);

plusButton.addEventListener("click", incrementValue);
