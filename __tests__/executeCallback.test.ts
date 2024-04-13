import { describe, expect, it, vitest } from "vitest";
import { executeCallback } from "../executeCallback";

describe("executeCallback()", () => {
  it("correctly calls the provided callback function", () => {
    const callback = vitest.fn();
    const taskText = "Buy groceries";
    executeCallback(callback, taskText);
    expect(callback).toHaveBeenCalledOnce();
  });
  it("correctly calls the provided callback function with its second parameter", () => {
    const callback = vitest.fn();
    const taskText = "Buy groceries";
    executeCallback(callback, taskText);
    expect(callback).toHaveBeenCalledWith(taskText);
  });
});
