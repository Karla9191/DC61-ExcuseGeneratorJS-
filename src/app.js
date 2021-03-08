/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let funExcuse = onLoad();

  document.getElementById("excuse").innerHTML = funExcuse;
};

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

  let RanWho = Math.floor(Math.random() * who.length);
  let RanAction = Math.floor(Math.random() * action.length);
  let RanWhat = Math.floor(Math.random() * what.length);
  let RanWhen = Math.floor(Math.random() * when.length);

  console.log(RanWho, RanAction, RanWhat, RanWhen);
}
