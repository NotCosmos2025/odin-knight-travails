import * as Board from "./board.js";

const allButtons = document.querySelectorAll("button");
const placeKnightBtn = document.querySelector("#placeKnight-btn");
const randomKnightBtn = document.querySelector("#randomKnight-btn");
const selectEndPositionBtn = document.querySelector("#selectEndPosition-btn");
const randomEndPositionBtn = document.querySelector("#randomEndPosition-btn");
const travailBtn = document.querySelector("#travail-btn");
const clearBtn = document.querySelector("#clear-btn");

let isPlacingKnight = false;
const getIsPlacingKnight = () => isPlacingKnight;
const setIsPlacingKnight = (bool) => isPlacingKnight = bool;

let isPlacingEndPosition = false;
const getIsPlacingEndPosition = () => isPlacingEndPosition;
const setIsPlacingEndPosition = (bool) => isPlacingEndPosition = bool;

const disableAllButtons = () => {
    allButtons.forEach((button) => {
        button.setAttribute("disabled", "true");
    })
}

const enableAllButtons = () => {
    allButtons.forEach((button) => {
        button.removeAttribute("disabled");
    })
    
    //disable traversal button if knight & endposition not placed
    if (!Board.isKnightPlaced() || !Board.isEndPositionPlaced()) {
        travailBtn.setAttribute("disabled", "true")
    } 
}

const disableButton = (button) => {
    button.setAttribute("disabled", "true"); 
}

export {disableAllButtons, disableButton, enableAllButtons, getIsPlacingKnight, setIsPlacingKnight, getIsPlacingEndPosition, setIsPlacingEndPosition, placeKnightBtn, randomKnightBtn, selectEndPositionBtn, randomEndPositionBtn, travailBtn, clearBtn}