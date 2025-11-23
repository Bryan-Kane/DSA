# Data Structures & Algorithms (DSA)

A personal repository to track my progress through various Data Structures and Algorithms problems.

## Progress Summary

**Total Completed**: 35 problems
- Arrays: 10/? 🔄
- Linked Lists: 5/5 ✅
- Trees: 6/? 🔄
- Strings: 5/? 🔄
- Dynamic Programming: 4/? 🔄
- Stacks & Queues: 3/? 🔄
- Graphs: 2/? 🔄

See [PROGRESS.md](./PROGRESS.md) for detailed notes and progress tracking.

## Structure

Problems are organized by topic/category:
- `Arrays/` - Array manipulation, two pointers, hash maps, binary search
- `linked-lists/` - Pointer manipulation, fast & slow pointers, reversal techniques
- `trees/` - Binary tree traversal (BFS/DFS), recursive and iterative solutions
- `strings/` - String manipulation, pattern matching, substring search
- `dynamic-programming/` - DP patterns, memoization, optimization techniques
- `stacks-queues/` - Stack/Queue operations, monotonic stack, two-stack patterns
- `graphs/` - Graph traversal (DFS/BFS), connected components, graph properties

**Naming Convention:**
- Folder names: lowercase with hyphens (e.g., `linked-lists/`, `dynamic-programming/`)
- File names: lowercase with hyphens, short and simple for easy terminal use (e.g., `fibonacci.js`, `two-sum.js`)
- Reason: Easier to type `node fibonacci.js` than `node fibonacci-number-problem.js`

## Key Patterns Covered

### Arrays
- Hash Map/Set for O(1) lookups
- Two Pointers (same/opposite direction)
- Prefix/Suffix products
- Binary Search
- Kadane's Algorithm (DP)

### Linked Lists
- In-place reversal (3 pointers)
- Floyd's Cycle Detection
- Fast & Slow pointers
- Dummy node technique

### Trees
- BFS (Level-order traversal)
- DFS (Recursive traversal)
- Understanding O(W) vs O(H) space complexity

### Strings
- Substring search (naive O(N*M) approach)
- Built-in string methods
- Sliding Window technique
- Hash Map/Set for character tracking
- Stack pattern for matching/balancing problems

### Dynamic Programming
- Memoization (Top-down DP)
- Iteration (Bottom-up DP)
- Space optimization techniques
- O(2^N) → O(N) → O(1) optimization progression

### Stacks & Queues
- Stack (LIFO) vs Queue (FIFO)
- Two-stack queue pattern (lazy transfer)
- Monotonic stack (next greater/smaller element)
- Parallel stacks for metadata tracking

### Graphs
- DFS (Depth-First Search) flood fill
- Connected components
- Graph properties and O(1) solutions
- Grid as implicit graph

## Problem Format

Each problem file should include:
- **Problem name** (matching LeetCode title)
- **LeetCode difficulty** (Easy/Medium/Hard)
- **Concise problem description** (2-3 lines max)
- **3 examples** with input/output only (no explanations)
- **Minimal constraints**
- **Target Complexity** with `O(?)`
- **NO test cases provided** - I write my own tests to simulate interview conditions

## Notes

- Each solution is implemented in JavaScript
- Problems that can be solved both iteratively and recursively include both implementations
- Complexity analysis included in comments for each solution
- **Problem descriptions should be concise** - It's better to ask clarifying questions than have everything spelled out
- Solutions are organized by problem type/category
- This repo serves as a reference and learning log

