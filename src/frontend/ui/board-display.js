import KnightIcon from "../icons/knight.png";
import FlagIcon from "../icons/flag.png";
import { makeElement } from "./helper.js";
import * as Board from "../logic/board.js";

const chessBoard = document.querySelector("#chessBoard");

let squares;
const getSquaresDOM = () => squares;

const initBoard = () => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = makeElement("div", "square", null, null);
            square.dataset.row = i;
            square.dataset.col = j;
            if ((i + j) % 2 === 0) square.classList.add("light");
            else square.classList.add("dark");
            chessBoard.append(square);
        }
    }

    squares = chessBoard.querySelectorAll(".square");
};

const clearBoard = () => {
    squares.forEach((square) => {
        square.innerHTML = "";
    });
};

const renderTrail = () => {
    const vertices = Board.getTrailVertices();
    for (let i = 0; i < vertices.length; i++) {
        const square = selectSquareFromVertex(vertices[i]);
        placeTrail(square, `${i}`);
    }
};

//pretty ugly to write this but gets the job done
const renderEndTrail = (vertex) => {
    const square = selectSquareFromVertex(vertex);
    const verticesLength = Board.getTrailVertices().length;
    const trail = makeElement('p', 'corner-trail', null, verticesLength - 1);
    square.append(trail)
}

const renderBoard = () => {
    const knightVertex = Board.getKnightVertex();
    const endVertex = Board.getEndVertex();
    if (knightVertex) {
        placeKnight(selectSquareFromVertex(knightVertex));
    }
    if (endVertex) {
        placeEndPosition(selectSquareFromVertex(endVertex));
    }
};

const selectSquareFromVertex = (vertex) => {
    const row = vertex[0];
    const col = vertex[1];

    const square = chessBoard.querySelector(`.square[data-row='${row}'][data-col='${col}']`);
    return square;
};
// Will work on this sooner or later
/**
 * Set a custom cursor to knight if true, else default cursor
 * @param {boolean} on - true -> knight cursor. false -> default cursor
 */
const setKnightCursor = (on) => {};

const placeTrail = (square, trailNumber) => {
    const trail = makeElement("p", "trail", null, trailNumber);
    square.append(trail);
};

const placeKnight = (square) => {
    const icon = makeElement("img", "icon");
    icon.src = KnightIcon;
    square.append(icon);
};

const placeEndPosition = (square) => {
    const icon = makeElement("img", "icon");
    icon.src = FlagIcon;
    square.append(icon);
};

export { renderTrail, renderEndTrail, initBoard, clearBoard, renderBoard, setKnightCursor, placeKnight, getSquaresDOM, placeEndPosition };
