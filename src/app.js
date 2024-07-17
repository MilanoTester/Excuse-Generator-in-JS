/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = [
    "A wild horse",
    "A massive dog",
    "An angry old man",
    "A cow over a truck"
  ];
  let action = ["bit", "pooped over", "crushed", "spit"];
  let what = ["my portfolio", "my phone", "my car", "my suit"];
  let when = [
    "this morning",
    "a few moments ago",
    "going there",
    "during my lunch"
  ];

  //to determine random indexes for arrays
  let max = 3 + 1;
  let min = 0;
  let whoIndex = Math.floor(min + Math.random() * (max - min));
  let actionIndex = Math.floor(min + Math.random() * (max - min));
  let whatIndex = Math.floor(min + Math.random() * (max - min));
  let whenIndex = Math.floor(min + Math.random() * (max - min));

  document.getElementById("excuse").innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
};
