# Unexpected 0 Return in Addition Function with Null Inputs

This repository demonstrates a common JavaScript coding issue where null values are handled with a simple return of 0 in a function designed to add two numbers.

## The Bug

The `foo` function in `bug.js` handles null input values by returning 0. While functional, this approach might mask errors or lead to unexpected behavior if alternative handling is needed (e.g., throwing an error or using a default value). The default return of 0 may not be appropriate for all scenarios.

## The Solution

The `bugSolution.js` file provides an improved version of the `foo` function.  It now uses a ternary operator to provide a more explicit default value when a null value is encountered. Additionally, it provides an alternative solution that throws an error in the event of null values which might provide a more robust error mechanism.  Choose the solution which best suits the needs of your application. 

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the files in a JavaScript environment (e.g., Node.js) to observe the output of both functions.