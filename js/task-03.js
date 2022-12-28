const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
/* Sposób z create.Element (działa)
const list = document.querySelector(".gallery");
list.setAttribute("style", "list-style: none;");
images.forEach((image) => {
  const listItem = document.createElement("li");
  const imgItem = document.createElement("img");
  imgItem.setAttribute("src", image.url);
  imgItem.setAttribute("alt", image.alt);
  imgItem.setAttribute(
    "style",
    "max-width: 100%; height: auto; display: block;"
  );
  listItem.append(imgItem);
  list.append(listItem);
});*/

const list = document.querySelector(".gallery");

images.forEach((image) => {
  list.insertAdjacentHTML(
    "beforeend",
    `<li><img style = "max-width: 100%; height: auto; display: block" src="${image.url}" alt="${image.alt}"/></li>`
  );
  list.setAttribute("style", "list-style: none; ");
});
