# Claude Rules for DSA Repository

## File and Folder Naming Conventions

- **Folders**: Use kebab-case (lowercase with hyphens). NO SPACES.
  - ✅ Good: `linked-lists/`, `binary-trees/`, `dynamic-programming/`
  - ❌ Bad: `Linked Lists/`, `Binary Trees/`, `Dynamic Programming/`

- **Files**: Use kebab-case (lowercase with hyphens). NO SPACES.
  - ✅ Good: `two-sum.js`, `reverse-linked-list.js`
  - ❌ Bad: `Two Sum.js`, `reverse_linked_list.js`

**Reason**: Avoids needing quotes in terminal commands (e.g., `cd linked-lists` instead of `cd "Linked Lists"`)

## Problem File Structure

Each problem file should follow this template:

```javascript
/**
 * Problem Title
 * Difficulty: Easy/Medium/Hard
 *
 * Problem description...
 *
 * Example 1:
 * Input: ...
 * Output: ...
 *
 * Constraints:
 * - ...
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function problemName(params) {
  // Your solution here
}

//Space: O(?) YOUR explanation here
//Time: O(?) YOUR explanation here

// Tests
console.log(problemName(testInput)); // expected output
```

**Note**: The user writes both the solution AND the complexity analysis comments.

## Progress Tracking

- Update `PROGRESS.md` after completing each problem
- Include: difficulty, time/space complexity, pattern used
- Mark problems as ✅ (completed) or 🔄 (in progress)

## General Guidelines

- Each solution implemented in JavaScript
- Include complexity analysis in comments
- Add test cases at the bottom of each file
- When creating new problem files, provide the problem description and empty function - DO NOT include the solution
- Organize problems by topic/category (arrays, linked-lists, trees, etc.)

## Multiple Solution Approaches

For problems that can be solved both **iteratively and recursively**:
- Include BOTH implementations in the same file
- Name them appropriately (e.g., `invertTree()` and `invertTreeRecursion()`)
- Include complexity analysis for each approach
- Add test cases for both approaches
- This applies to any problem where "can you do it recursively?" might be asked

**Example**: Tree traversal, linked list reversal, etc.

**Note on Solutions**: When creating the initial problem file, provide empty functions for BOTH approaches. The user will implement them. However, if the user has already solved one approach and asks for help with the alternative approach (or explicitly asks for the solution), you may provide guidance or the solution since they've already demonstrated understanding of the problem.
