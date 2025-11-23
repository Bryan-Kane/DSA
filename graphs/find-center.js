/**
 * Find Center of Star Graph
 * Difficulty: Easy
 *
 * There is an undirected star graph with n nodes labeled from 1 to n. A star graph
 * is a graph where there is one center node and exactly n - 1 edges connecting the
 * center node with every other node. Return the center of the star graph.
 *
 * Example 1:
 * Input: edges = [[1,2],[2,3],[4,2]]
 * Output: 2
 *
 * Example 2:
 * Input: edges = [[1,2],[5,1],[1,3],[1,4]]
 * Output: 1
 *
 * Example 3:
 * Input: edges = [[1,2],[2,3]]
 * Output: 2
 *
 * Constraints:
 * - 3 <= n <= 10^5
 * - edges.length == n - 1
 * - edges[i].length == 2
 * - The given input represents a valid star graph
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function findCenter(edges) {
  if(edges.length <= 0){
    return null;
  }
  return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1];
  // Your code here
}

console.log(findCenter([[1,2],[2,3],[4,2],[2,6]]));