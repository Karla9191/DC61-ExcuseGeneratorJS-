/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let RanWho = who[Math.floor(Math.random() * who.length)];

  let RanAction = action[Math.floor(Math.random() * action.length)];

  let RanWhat = what[Math.floor(Math.random() * what.length)];

  let RanWhen = when[Math.floor(Math.random() * when.length)];

  let totalFrase = RanWho + " " + RanAction + " " + RanWhat + " " + RanWhen;

  //let ejemplo = "Karla Hola Mundo";

  //document.getElementById("excuseF").innerHTML = ejemplo;

  document.getElementById("excuseF").innerHTML = totalFrase;
};

/*
function onLoad() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let RanWho = who[Math.floor(Math.random() * who.length)];

  let RanAction = action[Math.floor(Math.random() * action.length)];

  let RanWhat = what[Math.floor(Math.random() * what.length)];

  let RanWhen = when[Math.floor(Math.random() * when.length)];

  let totalFrase = RanWho + " " + RanAction + " " + RanWhat + " " + RanWhen;

  console.log(totalFrase);

  //console.log(RanWho, RanAction, RanWhat, RanWhen);
}*/
