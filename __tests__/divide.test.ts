import { describe, expect, it } from "vitest";
import { divide } from "../divide";

describe("divide()", () => {
  it("should divide two numbers", () => {
    const number1 = 10;
    const number2 = 2;
    const expectDivision = number1 / number2;
    const result = divide(number1, number2);
    expect(result).toBe(expectDivision);
  });
  it("should divide a negative number by a positive number and return a positive ans", () => {
    const number1 = -10;
    const number2 = 2;
    const expectDivision = -number1 / number2;
    const result = divide(number1, number2);
    expect(result).toBe(expectDivision);
  });
  it("should throw an error when dividing by zero", () => {
    // wrong attempt because its throw error when its calling divide function
    // const result1 = divide(-10, 0);
    // expect(result1).toThrowError("Division by zero");
    // correct attempt
    expect(() => divide(-10, 0)).toThrowError("Division by zero");
    // correct attempt with try catch
    // try {
    //   divide(-10, 0);
    // } catch (error: any) {
    //   expect(error).toBeInstanceOf(Error);
    //   expect(error.message).toBe("Division by zero");
    // }
  });
});
