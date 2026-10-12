import * as BoardDisplay from "./frontend/ui/board-display.js";
import * as EventController from "./frontend/events/event-controller.js.js";
import * as Board from "./frontend/logic/board.js"
import "./style.css";

const init = () => {
    BoardDisplay.initBoard();
    EventController.initAllEvents();
};

init();
