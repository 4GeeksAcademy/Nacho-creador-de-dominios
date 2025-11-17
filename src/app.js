import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function domainGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domainEnd = [".com", ".es"];

    let domainNames = [];
    for (let p = 0; p < pronoun.length; p++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          for (let d = 0; d < domainEnd.length; d++) {
            let domainName =
            pronoun[p] + adj[a] + noun[n] + domainEnd[d];
            domainNames.push(domainName);
          }
        }
      }
    }
    console.log(domainNames);
    return domainNames;
  }

  domainGenerator()
