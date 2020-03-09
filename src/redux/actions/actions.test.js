import { gamesToRedux, updateGames } from "./index";

describe("actions test", () => {
  it("should return the expected result", () => {
    const fakeGames = [{ id: "9", name: "Fornite" }];
    const result = gamesToRedux(fakeGames);
    expect(result).toStrictEqual({
      type: "LOAD_GAMES",
      payload: fakeGames
    });
  });

  it("should return the expected result", () => {
    const fakeGames = [{ id: "9", name: "Fornite" }];
    const result = updateGames(fakeGames);
    expect(result).toStrictEqual({
      type: "UPDATE_GAMES",
      payload: fakeGames
    });
  });
});
