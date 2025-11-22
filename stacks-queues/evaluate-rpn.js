// Evaluate Reverse Polish Notation (RPN)
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
//
// Valid operators are +, -, *, and /
// Each operand may be an integer or another expression.
// Division between two integers should truncate toward zero.
//
// RPN (Postfix notation) examples:
// - Infix: (1 + 2) * 3
// - RPN: 1 2 + 3 *
//
// How it works:
// - Numbers get pushed onto a stack
// - When you see an operator, pop two numbers, apply operator, push result back
//
// Example: ["2", "1", "+", "3", "*"]
// Step 1: push 2        stack: [2]
// Step 2: push 1        stack: [2, 1]
// Step 3: see +         pop 1, pop 2, compute 2+1=3, push 3    stack: [3]
// Step 4: push 3        stack: [3, 3]
// Step 5: see *         pop 3, pop 3, compute 3*3=9, push 9    stack: [9]
// Result: 9

//Space: O(N) stack can grow proportionally with tokenss
//Time: O(N) loop through once
function evalRPN(tokens) {
  if(tokens.length === 1){
    return Number(tokens[0]);
  }
  let stack = [];
  let operators = ["+","-","/","*"];
  for(let i=0;i<tokens.length;i++){
    if(!operators.includes(tokens[i])){
      stack.push(Number(tokens[i]));
    } else{
      let number1 = stack.pop();
      let number2 = stack.pop();
      if(tokens[i] === "+"){
        stack.push(number2 + number1);
      } else if(tokens[i] === "-"){
        stack.push(number2 - number1);
      } else if(tokens[i] === "/"){
        stack.push(Math.trunc(number2 / number1));
      } else{
        stack.push(number2 * number1);
      }
    }
  }
  return stack[0];
}

// Test cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Expected: 9 ((2 + 1) * 3)
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Expected: 6 (4 + (13 / 5))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
// Expected: 22
console.log(evalRPN(["3", "11", "+", "5", "-"])); // Expected: 9 ((3 + 11) - 5)
console.log(evalRPN(["18"])); // Expected: 18 (single number)
