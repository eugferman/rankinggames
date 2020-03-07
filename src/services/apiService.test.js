import apiService from './apiService';
import games from '../../public/data.json';

describe("actions test", () => {
  it("should return the expected result", async () => {
    window.fetch = jest.fn();
    window.fetch.mockReturnValue(Promise.resolve({
      json: () => Promise.resolve(games)
    }))
    const result = await apiService();
    expect(result).toStrictEqual(games)
  });
})