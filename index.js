var typeText = document.querySelector(".typeText")
var textToBeTyped = "Web Developer"
var textToBeTypedArr = ["Web Developer", "Student", "Learner", "Enthusiast"]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
    if (isAdding) {
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        isAdding = false;
        setTimeout(function () {
          playAnim()
        }, 2000);
        return;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        isAdding = true;
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length;
      } else {
        index--;
      }
    }
    playAnim()
  }, isAdding ? 120 : 60)
}

playAnim();
