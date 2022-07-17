const form = document.getElementById("search-personality");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  innerText = event.target["personality-text"].value;
  const data = await displayResult(innerText);
  resultContainer = document.getElementById("result-container");
  resultContainer.innerText = data["searchResult"];
  resultContainer.style.display = "block";
});
function displayResult(data) {
  console.log("Here");
  resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
}
async function displayResult(text) {
  var queryUrl = "http://127.0.0.1:8000/";
  payload = {
    text: text,
  };
  settings = {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify(payload),
  };
  response = await fetch(queryUrl, settings);
  var data = await response.json();
  return data;
}
