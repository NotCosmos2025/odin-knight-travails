import * as Controls from "../logic/controls.js";
import * as BoardDisplay from "../ui/board-display.js";
import * as Board from "../logic/board.js"

const initControlEvents = () => {
    Controls.disableButton(Controls.travailBtn);

    initplaceKnightEvent();
    initRandomKnightEvent();
    initSelectEndPositionEvent();
    initRandomEndPositionEvent();
    initTravailEvent();
    initClearEvent();
};

const initplaceKnightEvent = () => {
    Controls.placeKnightBtn.addEventListener("click", () => {
        Controls.disableAllButtons();
        Controls.setIsPlacingKnight(true);
        BoardDisplay.setKnightCursor(true);
        Board.resetTrail();
    });
};

const initRandomKnightEvent = () => {
    Controls.randomKnightBtn.addEventListener("click", () => {
        Board.placeRandomItem('K');  
        Board.resetTrail();
    });
};

const initSelectEndPositionEvent = () => {
    Controls.selectEndPositionBtn.addEventListener('click', () => {
        Controls.disableAllButtons();
        Controls.setIsPlacingEndPosition(true);
        Board.resetTrail();
    })
}

const initRandomEndPositionEvent = () => {
    Controls.randomEndPositionBtn.addEventListener('click', () => {
        Board.placeRandomItem('E');
        Board.resetTrail();
    })
}

const initTravailEvent = () => {
    Controls.travailBtn.addEventListener('click', () => {
        Board.travailKnight();
    })
}

const initClearEvent = () => {
    Controls.clearBtn.addEventListener('click', () => {
        Board.resetTrail();
        BoardDisplay.clearBoard();
        Board.resetBoard();
        Controls.enableAllButtons();
    })
}

export { initControlEvents };
