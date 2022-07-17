const form = document.getElementById("search-personality");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  innerText = event.target["personality-text"].value;
  modelChoose =
    event.target["model"].options[event.target["model"].selectedIndex].value;

  const data = await displayResult(innerText, modelChoose);

  resultContainer = document.getElementById("result-container");
  resultContainer.innerText = data["searchResult"];
  resultContainer.style.display = "block";
});

async function displayResult(text, model) {
  var queryUrl = "http://127.0.0.1:8000/";
  payload = {
    text: text,
    model: model,
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
