document.addEventListener("DOMContentLoaded", (event) => {
  let count = 0;
  const countDisplay = document.getElementById("count");
  const countButton = document.getElementById("count_plus");

  countButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = "Valor de count: " + count;
  });
});
