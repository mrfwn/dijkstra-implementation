export class Queue {
    private queue: any;
    constructor(values: any = []) {
        this.queue = [];
        values.forEach((value: any) => this.add(value));
    }

    add(data: any) {
        this.queue.unshift(data);
    }

    remove() {
        return this.queue.pop();
    }

    orderQueueDec(param: string) {
        this.queue.sort((a: any, b: any) => b[param] - a[param]);
    }

    queueIsEmpty() {
        return this.queue.length === 0;
    }

    getQueue() {
        return this.queue;
    }

}

export class Stack {
    private stack: any;
    constructor(values: any = []) {
        this.stack = values;
    }

    push(data: any) {
        this.stack.push(data);
    }

    pop() {
        return this.stack.pop();
    }

    stackIsEmpty() {
        return this.stack.length === 0;
    }

    getStackTopToBottom() {
        return this.stack.reverse();
    }
}
type CorrelationNode = {
    source: string;
    destination: string;
    edgeWeight: number;
}

export class Graph {
    private graph: { [T: number | string]: LinkedList };

    constructor(correlationList: CorrelationNode[]) {
        this.graph = {};

        correlationList.forEach((node) => {
            if (this.graph[node.source]) {
                this.graph[node.source].insertLast(node);
            } else {
                this.graph[node.source] = new LinkedList([node]);
            }
        })
    }

    getGraph() {
        return this.graph;
    }
}

export class Node {
    public data: any;
    public next: Node | null;
    constructor(data: any, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    private head: Node | null;
    constructor(values: any = []) {
        this.head = null;
        values.forEach((data: any) => {
            this.insertFirst(data);
        });
    }

    insertFirst(data: any) {
        this.insertAt(data, 0);
    }

    insertLast(data: any) {
        this.insertAt(data, this.size() - 1);
    }

    getLast() {
        return this.getAt(this.size() - 1);
    }

    getFirst() {
        return this.getAt(0);
    }

    getAt(index: number) {
        let count = 0;
        let node = this.head;
        while (node) {
            if (index === count) return node;
            node = node.next;
            count++;
        }
        return null;
    }

    insertAt(data: any, index: number) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = (this.getAt(index - 1) || this.getLast()) as Node;
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    removeAt(index: number) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    removeLast() {
        this.removeAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    forEach(fn: Function) {
        let count = 0;
        let node = this.head;
        while (node) {
            fn(node.data, count);
            node = node.next;
            count++;
        }
    }

    map(fn: Function) {
        let count = 0;
        let node = this.head;
        const resultArray = [];
        while (node) {
            resultArray.push(fn(node.data, count));
            node = node.next;
            count++;
        }
        return resultArray;
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node.data;
            node = node.next;
        }
    }
}

