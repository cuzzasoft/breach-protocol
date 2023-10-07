export const options = ['E9', '1C', '55', '7A', 'BD'];

export const generateOptions = (size: number) =>
  Array.from(Array(size)).map(
    () => options[Math.floor(Math.random() * options.length)],
  );
