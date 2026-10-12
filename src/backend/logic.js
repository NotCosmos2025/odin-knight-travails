import { Queue } from "./queue.js";
import { Position } from "./graph.js";

const convertVertexToString = (vertex) => `${vertex[0]},${vertex[1]}`;

const knightMoves = (startVertex, endVertex) => {
    const path = getPath(startVertex, endVertex);
    return path;
};

const getPath = (startVertex, endVertex) => {
    if (convertVertexToString(startVertex) === convertVertexToString(endVertex)) {
        console.log(`You made it in 0 moves! Here's your path: `);
        console.log(startVertex);
        return [startVertex];
    }

    const startPosition = new Position(startVertex);
    const endVertexString = convertVertexToString(endVertex);

    const q = new Queue();
    const visited = new Set();
    const parents = new Map();
    let found = false;

    visited.add(convertVertexToString(startPosition));
    q.enqueue(startPosition);

    while (!found && !q.isEmpty()) {
        const currentPosition = q.dequeue();
        currentPosition.calculateAdjacencyList();
        const currentVertexString = convertVertexToString(currentPosition.vertex);

        for (const pos of currentPosition.adjacencyList) {
            const vertexString = convertVertexToString(pos.vertex);
            if (!visited.has(vertexString)) {
                visited.add(vertexString);
                q.enqueue(pos);
                //adjacent vertex will have parent of currentVertex
                parents.set(vertexString, currentVertexString);
            }

            //found endVertex
            if (vertexString === endVertexString) {
                found = true;
                break;
            }
        }
    }

    let currentVertexParentString = endVertexString;
    let count = 0;
    const path = [];
    while (currentVertexParentString !== convertVertexToString(startVertex)) {
        count++;
        path.push(currentVertexParentString);
        currentVertexParentString = parents.get(currentVertexParentString);
    }

    path.push(currentVertexParentString);
    path.reverse();

    console.log(`You made it in ${count} moves! Here's your path:`);
    for (let i = 0; i < path.length; i++) {
        //fragile but holds due to 8x8 board
        const vertex = [+path[i][0], +path[i][2]];
        path[i] = vertex;
        // console.log(vertex);
    }

    return path;
};

export {knightMoves};