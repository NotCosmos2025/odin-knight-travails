import * as BoardDisplay from "../ui/board-display.js";
import * as Controls from "./controls.js";
import * as Logic from "../../backend/logic.js";

let knightPlaced = false;
const isKnightPlaced = () => knightPlaced;
let endPositionPlaced = false;
const isEndPositionPlaced = () => endPositionPlaced;
let knightVertex;
const getKnightVertex = () => knightVertex;
let endVertex;
const getEndVertex = () => endVertex;
let isTravailing = false;

let trailVertices = [];
/**
 *
 * @returns {int[][]}
 */
const getTrailVertices = () => trailVertices;

const travailKnight = () => {
    const moves = Logic.knightMoves(knightVertex, endVertex);
    knightPlaced = false;
    Controls.disableAllButtons();

    //helper functions
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const runLoop = async () => {
        isTravailing = true;
        for (let i = 0; i < moves.length; i++) {
            knightVertex = moves[i];
            if (i === moves.length - 1) {
                endVertex = undefined;
            }
            BoardDisplay.clearBoard();
            BoardDisplay.renderBoard();
            BoardDisplay.renderTrail(trailVertices);
            trailVertices.push(moves[i]);
            if (i === moves.length - 1) {
                BoardDisplay.renderEndTrail(trailVertices[trailVertices.length - 1]);
            }
            await delay(1000);
        }

        isTravailing = false;
        knightPlaced = true;
        endPositionPlaced = false;
        Controls.enableAllButtons();
    };

    runLoop();
};

const resetTrail = () => {
    trailVertices = [];
};

const resetBoard = () => {
    knightPlaced = false;
    endPositionPlaced = false;
    knightVertex = undefined;
    endVertex = undefined;
};

/**
 *
 * @param {div} square
 * @returns {int[][]} the row and col of the square
 */
const getSquareVertex = (square) => {
    const x = +square.dataset.row;
    const y = +square.dataset.col;
    return [x, y];
};

const vertexIsOccupied = (vertex) => {
    if (JSON.stringify(vertex) === JSON.stringify(knightVertex) || JSON.stringify(vertex) === JSON.stringify(endVertex)) return true;
    return false;
};

const handlePlacingSquare = (square) => {
    //do nothing if travailing
    if (isTravailing) return;
    //check if user is currently placing knight or placing end position
    const isPlacingKnight = Controls.getIsPlacingKnight();
    const isPlacingEndPosition = Controls.getIsPlacingEndPosition();

    const vertex = getSquareVertex(square);

    //do nothing if occupied
    if (vertexIsOccupied(vertex)) {
        Controls.enableAllButtons();
        return;
    }

    BoardDisplay.clearBoard();
    //place onto board
    if (isPlacingKnight) {
        knightVertex = vertex;
        knightPlaced = true;
    }
    if (isPlacingEndPosition) {
        endVertex = vertex;
        endPositionPlaced = true;
    }

    BoardDisplay.renderBoard();

    Controls.setIsPlacingKnight(false);
    Controls.setIsPlacingEndPosition(false);

    Controls.enableAllButtons();
};

/**
 *
 * @param {string} item - 'K' or 'E'
 */
const placeRandomItem = (item) => {
    let x = getRandomIntInclusive(0, 7);
    let y = getRandomIntInclusive(0, 7);
    let vertex = [x, y];
    //check square is currently occupied first
    while (vertexIsOccupied(vertex)) {
        x = getRandomIntInclusive(0, 7);
        y = getRandomIntInclusive(0, 7);
        vertex = [x, y];
    }
    //place item
    if (item === "K") {
        knightVertex = vertex;
        knightPlaced = true;
    }
    if (item === "E") {
        endVertex = vertex;
        endPositionPlaced = true;
    }

    Controls.enableAllButtons();
    BoardDisplay.clearBoard();
    BoardDisplay.renderBoard();
};

const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export {
    getTrailVertices,
    travailKnight,
    resetTrail,
    resetBoard,
    handlePlacingSquare,
    isKnightPlaced,
    isEndPositionPlaced,
    getKnightVertex,
    getEndVertex,
    placeRandomItem,
};
