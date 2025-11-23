// Number of Islands
// Given an m x n 2D grid where:
// - '1' represents land
// - '0' represents water
// Return the number of islands.
//
// An island is surrounded by water and is formed by connecting adjacent lands
// horizontally or vertically. You may assume all four edges of the grid are surrounded by water.
//
// Examples:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
//
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
//
// Approach:
// - Iterate through each cell in the grid
// - When you find a '1', increment island count
// - Use DFS or BFS to mark all connected '1's as visited
// - Continue until you've checked all cells
//
// Key concepts:
// - Graph traversal (DFS or BFS)
// - Visited tracking (can modify grid in-place or use separate Set)
// - 4-directional movement (up, down, left, right)

function numIslands(grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }
  function dfs(grid, row, col) {
    if (row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === '0') {
      return;
    }
    grid[row][col] = '0';
    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
    dfs(grid, row, col - 1);
    dfs(grid, row, col + 1);
  }
  return count;
}

// Test cases
const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
console.log(numIslands(grid1)); // Expected: 1

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];
console.log(numIslands(grid2)); // Expected: 3

const grid3 = [
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "1", "0", "1"]
];
console.log(numIslands(grid3)); // Expected: 8 (corrected - there are 8 isolated islands)

const grid4 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"]
];
console.log(numIslands(grid4)); // Expected: 1
