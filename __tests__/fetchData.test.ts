import { describe, expect, it } from "vitest";
import { fetchData } from "../fetchData";

describe("fetchData()", () => {
  it("should resolves with the correct data when the asynchronous operation is successful", async () => {
    const res = await fetchData({ timeout: 1000, requestTime: 500 });
    expect(res).toEqual({ name: "John", age: 30 });
  }, {
    timeout: 500,
  });
  it("should reject correctly", async () => {
    const timeout = 50;
    const requestTime = 100;
    //it also works 
    // expect(fetchData({ timeout, requestTime })).rejects.toEqual("Request timeout");
    try {
      await fetchData({ timeout, requestTime });
    } catch (error) {
      expect(error).toBe("Request timeout");
    }
  });
});
