import { validateTodoDescription } from "@/core/todo/schemas/validate-todo-description";

describe("validateTodoDescription", () => {
  it("should return true if the description is valid", () => {
    const description = "Buy groceries";
    const result = validateTodoDescription(description);
    expect(result).toStrictEqual({ errors: [], success: true });
  });

  it("should return false if the description is empty", () => {
    const description = "";
    const result = validateTodoDescription(description);
    expect(result).toStrictEqual({
      errors: ["Description must be at least 3 characters long"],
      success: false,
    });
  });
});
