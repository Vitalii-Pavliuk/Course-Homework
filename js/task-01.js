console.log(`Number of categories: ${document.querySelector("#categories").children.length}`);

document.querySelectorAll(".item").forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});