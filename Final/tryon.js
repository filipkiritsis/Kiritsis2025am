let thumbs = document.querySelectorAll(".watch-thumb");
let tryArea = document.getElementById("try-area");
let resetBtn = document.getElementById("reset-btn");

let currentWatch = null;
let draggingSrc = "";

let wristX =410;
let wristY = 170;

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("dragstart", function (e) {
    draggingSrc = e.target.src;

    let img = new Image();
    img.src = draggingSrc;
    e.dataTransfer.setDragImage(img, 45, 45);
  });

  thumbs[i].addEventListener("dragend", function () {
    draggingSrc = "";
  });
}

tryArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

tryArea.addEventListener("drop", function (e) {
  e.preventDefault();

  if (draggingSrc === "") {
    return;
  }

  if (!currentWatch) {
    currentWatch = document.createElement("img");
    currentWatch.id = "watch-on-arm";
    tryArea.appendChild(currentWatch);
  }

  currentWatch.src = draggingSrc;

  currentWatch.style.left = wristX + "px";
  currentWatch.style.top = wristY + "px";
});

resetBtn.addEventListener("click", function () {
  if (currentWatch) {
    currentWatch.remove();
    currentWatch = null;
  }
});
