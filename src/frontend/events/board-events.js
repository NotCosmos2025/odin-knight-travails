import * as Board from "../logic/board.js";
import * as BoardDisplay from "../ui/board-display.js";

let squares;
const chessBoard = document.querySelector("#chessBoard");

const initSquareEvents = () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            Board.handlePlacingSquare(square);
        });
    });
};

export { initSquareEvents };
