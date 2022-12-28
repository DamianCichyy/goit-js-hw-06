let listItems = document.querySelectorAll(".item");
console.log("Number of Categories: " + listItems.length);
console.log("\n");
listItems.forEach((element) => {
  console.log("Category: " + element.querySelector("h2").innerText);
  console.log("Elements: " + element.querySelectorAll("li").length);
  console.log("\n");
});
