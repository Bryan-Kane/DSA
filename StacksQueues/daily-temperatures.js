// Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait
// after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.
//
// Examples:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Explanation:
// - Day 0: temp 73, next warmer is day 1 (74), wait 1 day
// - Day 1: temp 74, next warmer is day 2 (75), wait 1 day
// - Day 2: temp 75, next warmer is day 6 (76), wait 4 days
// - Day 3: temp 71, next warmer is day 5 (72), wait 2 days
// - Day 4: temp 69, next warmer is day 5 (72), wait 1 day
// - Day 5: temp 72, next warmer is day 6 (76), wait 1 day
// - Day 6: temp 76, no warmer day, answer is 0
// - Day 7: temp 73, no warmer day, answer is 0
//
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
//
// Input: temperatures = [30,60,90]
// Output: [1,1,0]
//
// Constraints:
// - 1 <= temperatures.length <= 10^5
// - 30 <= temperatures[i] <= 100

// Time: O(N) - each element pushed/popped from stack at most once
// Space: O(N) - stack can hold up to N elements in worst case
function dailyTemperatures(temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = []; // Stack stores indices (not temperatures)

  // Iterate backwards through the array
  for (let i = temperatures.length - 1; i >= 0; i--) {
    // Pop indices from stack while their temperatures are <= current temperature
    // These indices can never be the "next warmer day" for any future iteration
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }

    // If stack is not empty, top of stack is the next warmer day
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }
    // else: stack is empty, no warmer day exists, result[i] stays 0

    // Push current index onto stack
    stack.push(i);
  }

  return result;
}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
// Expected: [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([30,40,50,60]));
// Expected: [1,1,1,0]

console.log(dailyTemperatures([30,60,90]));
// Expected: [1,1,0]

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));
// Expected: [8,1,5,4,3,2,1,1,0,0]
