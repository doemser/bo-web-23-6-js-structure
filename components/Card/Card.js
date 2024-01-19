export default function Card(author) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "card__title class2";

  //   title.classList.add("card__title");
  //   title.classList.add("class2");

  title.textContent = author.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = "Card Text";

  const button = document.createElement("button");
  button.className = "card__button";
  button.textContent = "Decipher";
  button.addEventListener("click", () => console.log("Button click"));

  card.append(title, text, button);
  return card;
}
