const fibonacci = (num) => (num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2));

export default fibonacci;
