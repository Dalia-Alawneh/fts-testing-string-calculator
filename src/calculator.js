
const calc = (...args) => {
  if (args.length < 3 || args.length % 2 === 0) {
    throw new Error("Invalid input format");
  }

  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      if (typeof args[i] !== "number")
        throw new Error("Invalid input type");
    } else {
      if (typeof args[i] !== "string") {
        throw new Error("Invalid input format");
      }
      if (!["+", "-", "*", "/", "%"].includes(args[i])) {
        throw new Error("Invalid operator");
      }
    }
  }

  args = args.map((arg, i) => (i % 2 === 0 && arg > 1000 ? 0 : arg));


  const stack = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "*" || args[i] === "/" || args[i] === "%") {
      let prevNumber = stack.pop();
      let nextNumber = args[i + 1];

      if (args[i] === "/" && nextNumber === 0) {
        throw new Error("Division by zero");
      }
      let result = 0;
      switch (args[i]) {
        case '/':
          result = prevNumber / nextNumber;
          break;
        case '*':
          result = prevNumber * nextNumber;
          break;
        case '%':
          result = prevNumber % nextNumber;
          break;
      }
      stack.push(result);
      i++;
    } else {
      stack.push(args[i]);
    }
  }

  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    let operator = stack[i];
    let nextNumber = stack[i + 1];
    switch (operator) {
      case '+':
        result += nextNumber;
        break;
      case '-':
        result -= nextNumber;
        break;
    }
  }

  return result;
}

module.exports = calc