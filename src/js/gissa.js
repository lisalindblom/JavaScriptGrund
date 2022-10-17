let correct = 5;

let resultBox = document.getElementById("result");

function search() {
  let searchWord = document.getElementById("guess");

  let answer = searchWord.value;

  if (answer === correct) {
    resultBox.innerText = "rätt";
  } else {
    resultBox.innerText = "fel";
  }
}
