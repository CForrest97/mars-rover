import { navigateMarsRovers } from "../../src/marsRover";

describe("navigateMarsRovers", () => {
  describe("Given a rover at the Origin facing North", () => {
    describe("When it has no instructions", () => {
      it("Then it should not move", () => {
        const input = `5 5
0 0 N
`;

        const finalRoversOutput = navigateMarsRovers(input);

        expect(finalRoversOutput).toEqual("0 0 N");
      });
    });

    describe("When it has a single move forward instruction", () => {
      it("Then it should step forward once", () => {
        const input = `5 5
0 0 N
M`;

        const finalRoversOutput = navigateMarsRovers(input);

        expect(finalRoversOutput).toEqual("0 1 N");
      });
    });
  });

  describe("Given a rover at the (2, 2) facing North", () => {
    describe("When it has no instructions", () => {
      it("Then it should not move", () => {
        const input = `5 5
2 2 N
`;

        const finalRoversOutput = navigateMarsRovers(input);

        expect(finalRoversOutput).toEqual("2 2 N");
      });
    });

    describe("When it has a single move forward instruction", () => {});
  });

  describe("Given a rover at the (5, 5) facing East", () => {
    describe("When it has no instructions", () => {
      it("Then it should not move", () => {
        const input = `5 5
5 5 E
`;

        const finalRoversOutput = navigateMarsRovers(input);

        expect(finalRoversOutput).toEqual("5 5 E");
      });
    });
  });
});
