const modeBtn = document.getElementById("mode");

modeBtn.addEventListener('click', changeModeFunc);

function changeModeFunc() {
  if (modeBtn.innerHTML === "Dark Mode") {
     document.body.style.background = "black";
modeBtn.innerHTML = "Light Mode";

  } else {
    document.body.style.background = "blanchedalmond";
modeBtn.innerHTML = "Dark Mode";
  }
 

}