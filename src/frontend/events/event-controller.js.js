import * as ControlEvents from "./controls-events.js"
import * as BoardEvents from "./board-events.js";

const initAllEvents = () => {
    BoardEvents.initSquareEvents();
    ControlEvents.initControlEvents();
}

export {initAllEvents}