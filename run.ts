import { correlationListAddress, correlationListRouters, correlationListStates } from "./correlationLists";
import { Graph } from "./DataStructure";
import { Dijkstra } from "./Dijkstra";

const graphRouters = new Graph(correlationListRouters);
const dijkstraRouters = new Dijkstra(graphRouters);
const shortestPathRoutes = dijkstraRouters.findShortestWay('Router 1', 'Router 6');

const graphStates = new Graph(correlationListStates);
const dijkstraStates = new Dijkstra(graphStates);
const shortestPathStates = dijkstraStates.findShortestWay('Pernambuco', 'Sao Paulo');

const graphAddress = new Graph(correlationListAddress);
const dijkstraAddress = new Dijkstra(graphAddress);
const shortestPathSAddress = dijkstraAddress.findShortestWay('Address 1', 'Address 4');

console.log({
    shortestPathRoutes,
    shortestPathStates,
    shortestPathSAddress
});