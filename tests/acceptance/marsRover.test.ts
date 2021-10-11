import { navigateMarsRovers } from "../../src/marsRover";

describe("MarsRover", () => {
  it("should navigate 2 rovers across the Martian Plateau", () => {
    const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

    const finalRoversOutput = navigateMarsRovers(input);

    expect(finalRoversOutput).toEqual(`1 3 N
5 1 E`);
  });
});
