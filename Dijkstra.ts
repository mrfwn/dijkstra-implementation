import { Graph, Queue, Stack } from "./DataStructure";


export class Dijkstra {

    private graph = {} as any;
    constructor(graph: Graph) {
        const currentGraph = graph.getGraph();
        for (let node in currentGraph) {
            this.graph[node] = {
                nodes: currentGraph[node],
                nodeWeight: 1,
                nodeName: node
            }
        }
    }


    private findPointsOfShortestWay(start: string, finish: string): Stack {
        let nextVertex: string = finish;
        const stackVertex = new Stack([finish]);
        while (nextVertex !== start) {
            let minWeigth: number = Number.MAX_VALUE;
            let minVertex: string = "";
            for (let i of this.graph[nextVertex].nodes) {
                if (i.edgeWeight + this.graph[i.destination].nodeWeight < minWeigth) {
                    minWeigth = i.edgeWeight + this.graph[i.destination].nodeWeight;
                    minVertex = i.destination;
                }
            }
            stackVertex.push(minVertex);
            nextVertex = minVertex;
        }
        return stackVertex;
    }


    findShortestWay(start: string, finish: string): string[] {

        const nodes = new Queue();

        for (let node in this.graph) {
            this.graph[node].nodeWeight = this.graph[node].nodeName === start ? 0 : Number.MAX_VALUE;
            nodes.add(this.graph[node]);
        }

        while (!nodes.queueIsEmpty()) {
            nodes.orderQueueDec('nodeWeight');
            const currentVertex = nodes.remove();
            for (let j of currentVertex.nodes) {
                const calculateWeight: number = currentVertex.nodeWeight + j.edgeWeight;
                if (calculateWeight < this.graph[j.destination].nodeWeight) {
                    this.graph[j.destination].nodeWeight = calculateWeight;
                }
            }
        }

        const stackVertex: Stack = this.findPointsOfShortestWay(start, finish);

        return stackVertex.getStackTopToBottom();
    }

}


