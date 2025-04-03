# String Calculator

This is a simple calculator function that supports basic arithmetic operations such as addition, subtraction, multiplication, and division, as well as operator precedence.
## Features
- **Supports basic operations**: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), and Modulo (`%`).
- **Handles multiple numbers in a sequence**: The calculator can handle an unknown number of numbers and operations, dynamically processing them in the correct order.
- **Handles edge cases**:
  - Division by zero (throws an error when dividing by zero).
  - Invalid operator (throws an error for unsupported operators).
  - Invalid input format (throws an error if the input types or format are incorrect).
  - Numbers larger than 1000 are ignored in calculations (numbers greater than 1000 are treated as 0).
- **Test-Driven Development (TDD)**:
  - Developed using Test-Driven Development principles.
  - 100% test coverage is ensured, including edge cases and all possible valid/invalid scenarios.
