//import logMalWasAnderes, { logMalWas } from "./irgendwo/irgendwas.js";
// import { logMalWas } from "./irgendwo/irgendwas.js"; // export
// import logMalWasAnderes from "./irgendwo/irgendwas.js"; // export default

// logMalWas("Grenadinensaft");
// logMalWas("Brokkoli");

// logMalWasAnderes("Yeah");

import authors from "./utils/authors.js";
import Card from "./components/Card/Card.js";

const root = document.querySelector("#root");

authors.forEach((author) => {
  const card = Card(author);
  root.append(card);
});
