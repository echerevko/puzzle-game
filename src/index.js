import "./styles/styles.css";
import { ROWS, COLUMNS } from "./assets/assets";
import {
  dragOver,
  dragEnter,
  dragLeave,
  importAll,
  dragStart2,
} from "./assets/utils.js";
import blankImg from "./images/blank.png";

const cards = importAll(
  require.context("./images/cards/", false, /\.(png|jpe?g|svg)$/)
);

let currTile;
let otherTile;
let counter = 0;
const dragStart = dragStart2(currTile);

// let dragStart = dragStart2(currTile);

window.onload = function () {
  //Creating the puzzle section
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      //add an empty image
      let card = document.createElement("img");
      card.src = blankImg;

      //implementation of functionality in case of moving puzzles
      card.addEventListener("dragstart", dragStart); //click on image to drag
      card.addEventListener("dragover", dragOver); //drag animage
      card.addEventListener("dragenter", dragEnter); //dragging an image into another one
      card.addEventListener("dragleave", dragLeave); //dragging an image away from another one
      card.addEventListener("drop", dragDrop); //drop an image onto another one
      card.addEventListener("dragend", dragEnd); //after you completed dragDrop

      document.getElementById("board").append(card);
    }
  }

  //random images for each page loading(second img section)
  cards.forEach((card, i) => {
    card = Math.floor(Math.random() * cards.length);
    let tmp = cards[i];
    cards[i] = cards[card];
    cards[card] = tmp;
  });

  //Second image section
  cards.forEach((card, i) => {
    card = document.createElement("img");
    card.src = cards[i];

    //drag and drop functionality for the second image section
    card.addEventListener("dragstart", dragStart); //click on image to drag
    card.addEventListener("dragover", dragOver); //drag an image
    card.addEventListener("dragenter", dragEnter); //dragging an image into another one
    card.addEventListener("dragleave", dragLeave); //dragging an image away from another one
    card.addEventListener("drop", dragDrop); //drop an image onto another one
    card.addEventListener("dragend", dragEnd); //after you completed dragDrop

    document.getElementById("cards").append(card);
  });
};

// Start, Drop and End functions
// function dragStart() {
//   currTile = this; //this refers to image that was clicked on for dragging
// }

function dragDrop() {
  otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
  if (currTile.src === blankImg) {
    return;
  }

  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  counter += 1;
  document.getElementById("counter").innerText = counter;
}
