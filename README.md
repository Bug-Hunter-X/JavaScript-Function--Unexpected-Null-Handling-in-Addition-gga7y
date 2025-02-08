# JavaScript Function: Unexpected Null Handling in Addition

This repository demonstrates a potential bug in a simple JavaScript function that performs addition while handling null values. The function `foo` adds two numbers, but if either input is null, it returns 0. While this might seem like a reasonable approach, it could lead to unforeseen issues if the caller expects a different behavior (e.g., throwing an error, returning NaN, or simply ignoring the null value).

## Bug Description

The bug lies in the way the function handles null values. Instead of returning 0, it might be more appropriate to throw an error, return `NaN`, or handle the null input differently depending on the expected behavior.  This highlights the importance of carefully considering how null values are handled in JavaScript functions to avoid unexpected results.

## Bug Solution

The solution in `bugSolution.js` demonstrates alternative approaches to handling null values: throwing an error if either input is null, or using the Nullish Coalescing Operator (??) to use a default value (0) if either input is null.