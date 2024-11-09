let counter = 0;

document.querySelector("button[data-action='increment']").addEventListener("click",  () => {
    counter += 1;
    document.querySelector("#value").textContent = counter;
})

document.querySelector("button[data-action='decrement']").addEventListener("click", () => {
    counter -= 1;
    document.querySelector("#value").textContent = counter;
})