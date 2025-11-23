/**
 * Find if Path Exists in Graph
 * Difficulty: Easy
 *
 * Given n nodes labeled from 0 to n-1 and a list of undirected edges, determine if there
 * is a valid path from source to destination.
 *
 * Example 1:
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 *
 * Example 2:
 * Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
 * Output: false
 *
 * Example 3:
 * Input: n = 1, edges = [], source = 0, destination = 0
 * Output: true
 *
 * Constraints:
 * - 1 <= n <= 2 * 10^5
 * - 0 <= edges.length <= 2 * 10^5
 * - edges[i].length == 2
 * - 0 <= source, destination < n
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function validPath(n, edges, source, destination) {
  if(source === destination){
    return true;
  }
  let graphMap = new Map();
  for(let i = 0;i<n;i++){
    graphMap.set(i,[]);
  }
  for(const [u,v] of edges){
    graphMap.get(u).push(v);
    graphMap.get(v).push(u);
  }

  let queue = [source];
  let visited = new Set();
  visited.add(source);

  while(queue.length > 0){
    let node = queue.shift();
    for(const neighbor of graphMap.get(node)){
      if(neighbor === destination){
        return true;
      }
      if(!visited.has(neighbor)){
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return false;
}


console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));