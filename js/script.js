document.addEventListener("DOMContentLoaded", () => {
  fetchDataAndDisplayCards();
});

function fetchDataAndDisplayCards() {
  const url = "https://64b4f3bbf3dbab5a95c65e93.mockapi.io/best-seller"; // Ganti dengan URL API yang sesuai
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayDataAsCards(data);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}

function displayDataAsCards(data) {
  const dataContainer = document.getElementById("data-best-product");

  data.forEach((item) => {
    const card = createCard(item);
    dataContainer.appendChild(card);
  });
}

function createCard(item) {
  const col = document.createElement("div");
  col.classList.add("col-md-3", "mt-3");

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = "url(" + item.img + ")";
  card.style.backgroundSize = "cover";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-white", "d-flex", "flex-column");

  const text = document.createElement("p");
  text.classList.add("f-card-text", "mt-auto");
  text.textContent = "Rp. " + item.price;

  const title = document.createElement("h5");
  title.classList.add("f-card-title");
  title.textContent = item.name;

  cardBody.appendChild(text);
  cardBody.appendChild(title);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
}
