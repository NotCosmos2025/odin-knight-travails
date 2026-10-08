class Position {
    vertex;
    adjacencyList = [];
    constructor(vertex) {
        this.vertex = vertex;
    }

    calculateAdjacencyList() {
        this.#addLegalPosition(-2, 1);
        this.#addLegalPosition(-1, 2);
        this.#addLegalPosition(1, 2);
        this.#addLegalPosition(2, 1);

        this.#addLegalPosition(2, -1)
        this.#addLegalPosition(1, -2)
        this.#addLegalPosition(-1, -2);
        this.#addLegalPosition(-2, -1);
    }

    #addLegalPosition(horizontalShift, verticalShift) {
        let newHorizontalPos = this.vertex[0] + horizontalShift;
        let newVerticalPos = this.vertex[1] + verticalShift;

        if (this.#isLegalPosition(newHorizontalPos, newVerticalPos)) {
            this.adjacencyList.push(new Position([newHorizontalPos, newVerticalPos]));
        }
    }

    #isLegalPosition(xPosition, yPosition) {
        if (!Number.isInteger(xPosition) || !Number.isInteger(yPosition)) return false;
        if (xPosition < 0 || xPosition > 7) return false;
        if (yPosition < 0 || yPosition > 7) return false;
        return true;
    }
}

export {Position}