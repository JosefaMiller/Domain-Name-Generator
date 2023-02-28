/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".cl", ".com", ".es", ".net", ".org"];
  for (let Randompro = 0; Randompro < pronoun.length; Randompro++) {
    for (let Randomadj = 0; Randomadj < adj.length; Randomadj++) {
      for (let Randomnoun = 0; Randomnoun < noun.length; Randomnoun++) {
        for (let Randomdom = 0; Randomdom < dominio.length; Randomdom++) {
          console.log(
            pronoun[Randompro] +
              adj[Randomadj] +
              noun[Randomnoun] +
              dominio[Randomdom]
          );
        }
      }
    }
  }
};
