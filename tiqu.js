const selectInput = document.getElementById("selectInput");
const selectElement = document.querySelectorAll(".select-element");

const resultArray = [];

selectInput.addEventListener("focusin", () => {
  const list = document.querySelector(".select-list");
  list.style.display = "block";
});

const resultInput = document.getElementById("resultInput");

let badges = document.querySelectorAll(".icon");

function element() {
  selectElement.forEach((e) => {
    e.addEventListener("click", () => {
      if (resultArray.includes(e.value)) {
        return 0;
      }
      resultArray.push(e.value);
      resultInput.value = resultArray;
      e.classList = "select-element frozen";
      const resultBox = document.getElementById("result-box");
      const badge = document.createElement("div");
      badge.classList = "badge";
      badge.innerHTML = e.value;
      const icon = document.createElement("button");
      icon.classList = "icon";
      icon.onclick = () => deleteBadge(icon);
      icon.value = e.value;
      const line1 = document.createElement("div");
      line1.classList = "line1";
      const line2 = document.createElement("div");
      line2.classList = "line2";
      icon.appendChild(line1);
      icon.appendChild(line2);
      badge.appendChild(icon);
      resultBox.prepend(badge);
      badges = document.querySelectorAll(".icon");
    });
  });
}
element();
function deleteBadge(e) {
  if (resultArray.includes(e.value)) {
    var index = resultArray.indexOf(e.value);
    if (index !== -1) {
      resultArray.splice(index, 1);
    }
    const parent = e.parentElement;
    parent.remove();
    selectElement.forEach((element) => {
      if (element.value === e.value) {
        element.classList = "select-element";
      }
    });
    element();
  }
}

function closeSelect() {
  const list = document.querySelector(".select-list");
  list.style.display = "none";
  console.log("Hello");
}
