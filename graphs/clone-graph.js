/**
 * Clone Graph
 * Difficulty: Medium
 *
 * Given a reference to a node in a connected undirected graph, return a deep copy of the graph.
 * Each node contains a value and a list of neighbors.
 *
 * Example 1:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 *
 * Example 2:
 * Input: adjList = [[]]
 * Output: [[]]
 *
 * Example 3:
 * Input: adjList = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the graph is in the range [0, 100]
 * - 1 <= Node.val <= 100
 * - Node.val is unique for each node
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node) {
  // Your code here
}

// Helper function to create graph from adjacency list
function createGraph(adjList) {
  if (adjList.length === 0) return null;

  const nodes = [];
  for (let i = 0; i < adjList.length; i++) {
    nodes.push(new Node(i + 1));
  }

  for (let i = 0; i < adjList.length; i++) {
    for (let neighborVal of adjList[i]) {
      nodes[i].neighbors.push(nodes[neighborVal - 1]);
    }
  }

  return nodes[0];
}

// Helper function to convert graph to adjacency list for verification
function graphToAdjList(node, visited = new Set()) {
  if (!node) return [];

  const result = [];
  const queue = [node];
  visited.add(node);
  const nodeMap = new Map([[node, 0]]);
  let index = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    const neighborVals = [];

    for (let neighbor of current.neighbors) {
      neighborVals.push(neighbor.val);
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        nodeMap.set(neighbor, ++index);
      }
    }

    result.push(neighborVals.sort((a, b) => a - b));
  }

  return result;
}

// Test cases
const graph1 = createGraph([[2,4],[1,3],[2,4],[1,3]]);
const cloned1 = cloneGraph(graph1);
console.log(JSON.stringify(graphToAdjList(cloned1))); // Expected: [[2,4],[1,3],[2,4],[1,3]]
console.log(cloned1 !== graph1); // Expected: true (different objects)

const graph2 = createGraph([[]]);
const cloned2 = cloneGraph(graph2);
console.log(JSON.stringify(graphToAdjList(cloned2))); // Expected: [[]]

const graph3 = createGraph([]);
const cloned3 = cloneGraph(graph3);
console.log(cloned3); // Expected: null

// Test that it's a deep copy
const graph4 = createGraph([[2],[1]]);
const cloned4 = cloneGraph(graph4);
if (cloned4 && graph4) {
  console.log(cloned4 !== graph4); // Expected: true
  console.log(cloned4.neighbors[0] !== graph4.neighbors[0]); // Expected: true
}
