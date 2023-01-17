function handleForm(event) {
  event.preventDefault();

  const movie1Input = document.getElementById("movie1Input").value;
  const movie2Input = document.getElementById("movie2Input").value;
  const movie3Input = document.getElementById("movie3Input").value;
  const movie4Input = document.getElementById("movie4Input").value;
  const movie5Input = document.getElementById("movie5Input").value;
  const results = document.getElementById("result");

  // results.innerText = movie1Input;


let inputResults = [movie1Input, movie2Input, movie3Input, movie4Input, movie5Input];

results.innerHTML = inputResults;

}

window.addEventListener("load", function () {
  document.getElementById("complete-form").addEventListener("submit", handleForm);
});