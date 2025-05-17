import { describe } from "vitest";
import { sanitizeStr } from "./sanitize-str";

describe("sanitizeStr (unit)", () => {
  it("should return an empty string if the input is not a string", () => {
    // @ts-expect-error - we are testing the case where the input is not a string
    expect(sanitizeStr(123)).toBe("");
  });

  it("should return an empty string if the input is undefined", () => {
    // @ts-expect-error - we are testing the case where the input is undefined
    expect(sanitizeStr(undefined)).toBe("");
  });

  it("should return an empty string if the input is null", () => {
    // @ts-expect-error - we are testing the case where the input is null
    expect(sanitizeStr(null)).toBe("");
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(sanitizeStr("")).toBe("");
  });

  it("should return a sanitized string if the input is a string", () => {
    expect(sanitizeStr("  Hello World  ")).toBe("Hello World");
  });

  it("should return a sanitized string if the input is a string with special characters", () => {
    const original = "e\u0301";
    const expected = "é";
    expect(sanitizeStr(expected)).toBe(sanitizeStr(original));
  });
});
