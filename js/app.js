const textArea = document.getElementById("textArea");

function myWorkOnTextArea(className) {
  textArea.classList.toggle(className);
}

const fontSize = document.getElementById("fontSize");
fontSize.value = 24;
fontSize.addEventListener("click", function () {
  let mySizeFromUser = fontSize.value;
  let mySizeFromNum = parseInt(mySizeFromUser);

  textArea.classList.toggle(`text-[${mySizeFromNum}px]`);
});
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function () {
  let myColorString = colorPicker.value;

  textArea.classList.toggle(`text-[${myColorString}]`);
});
