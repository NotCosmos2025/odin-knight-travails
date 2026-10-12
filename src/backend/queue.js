class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    isEmpty() {
        if (this.tail - this.head === 0) {
            return true;
        }
        return false;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.head];
    }

    size() {
        return this.tail - this.head;
    }
}

export { Queue };
