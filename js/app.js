const textArea = document.getElementById("textArea");

function myWorkOnTextArea(className) {
  textArea.classList.toggle(className);
}
/*
const bold = document.getElementById("bold");
const italy = document.getElementById("italy");
const underline = document.getElementById("underline");
bold.addEventListener("click", function () {
  textArea.style.fontWeight = "bold";
});
italy.addEventListener("click", function () {
  textArea.style.fontStyle = "italic";
});
underline.addEventListener("click", function () {
  textArea.style.textDecoration = "underline";
});
*/
const fontSize = document.getElementById("fontSize");
fontSize.value = 24;
fontSize.addEventListener("click", function (e) {
  e.stopPropagation();
  let mySizeFromUser = fontSize.value;
  let mySizeFromNum = parseInt(mySizeFromUser);
  console.log(mySizeFromNum, mySizeFromUser);

  textArea.style.fontSize = mySizeFromUser + "px";
});
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function (e) {
  e.stopPropagation();
  let myColorString = colorPicker.value;

  textArea.style.color = myColorString;
});

const alingLeft = document.getElementById("aling-left");
const alingright = document.getElementById("aling-right");
const alingcenter = document.getElementById("aling-center");

alingText("aling-left", "left");
alingText("aling-right", "right");
alingText("aling-center", "center");
function alingText(elementId, elementAling) {
  document.getElementById(elementId).addEventListener("click", function () {
    textArea.style.textAlign = elementAling;
  });
}
