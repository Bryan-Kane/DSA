/**
 * Count Triangles
 *
 * Given an array of positive integers, find the number of triangles that can be formed
 * with three different array elements as the three sides of triangles.
 *
 * Triangle Inequality: For three sides to form a valid triangle,
 * the sum of any two sides must be greater than the third side.
 * If sides are sorted (a <= b <= c), we only need to check: a + b > c
 *
 * Example 1:
 * Input: [4, 6, 3, 7] -> [3,4,6,7] (3,6,7),(4,6,7),(3,4,6)
 * Output: 3
 * Explanation: Valid triangles are (3,4,6), (4,6,7), (3,6,7)
 *
 * Example 2:
 * Input: [10, 21, 22, 100, 101, 200, 300]
 * Output: 6
 *
 * Example 3:
 * Input: [1, 2, 3]
 * Output: 0
 * Explanation: 1 + 2 = 3, not greater than 3, so no valid triangle
 *
 * Approaches:
 * 1. Brute Force: O(n^3) - check all triplets
 * 2. Sort + Two Pointers: O(n^2) - fix largest side, use two pointers for other two
 *
 * Key Insight:
 * Sort the array. Fix the largest side (c) and use two pointers (a, b) to find pairs
 * where a + b > c. If arr[left] + arr[right] > arr[i], then all elements between
 * left and right also work with right, giving us (right - left) valid triangles.
 *
 * Target Complexity:
 * Time: O(n^2)
 * Space: O(1) excluding sort space
 */

function countTriangles(arr) {
    arr.sort((a,b) => b - a);
    let count = 0;
    for(let i = 0;i<arr.length - 2;i++){
        let left = i + 1;
        let right = arr.length - 1;
        while(left < right){
            if(arr[left] + arr[right] > arr[i]){
                count += (right - left);
                left++; //try a smaller number
            } else{
                right--; //try a bigger number
            }
        }
    }

    return count;

}

// Tests
console.log(countTriangles([4, 6, 3, 7]));                    // 3
console.log(countTriangles([10, 21, 22, 100, 101, 200, 300])); // 6
console.log(countTriangles([1, 2, 3]));                       // 0
console.log(countTriangles([1, 1, 1, 1]));                    // 4 (4 choose 3)
console.log(countTriangles([3, 4, 5, 6]));                    // 4
