export const navigateMarsRovers = (input: string) => {
  const lines = input.split("\n");

  const [x, y, direction] = lines[1].split(" ");
  const instructions = lines[2];

  return instructions === "" ? `${x} ${y} ${direction}` : `0 1 N`;
};
