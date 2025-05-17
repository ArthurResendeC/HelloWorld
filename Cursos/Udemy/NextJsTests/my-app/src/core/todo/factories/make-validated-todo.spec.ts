import * as sanitizeStrMod from "@/utils/sanitize-str";
import { makeValidatedTodo } from "./make-validated-todo";
import * as validateTodoDescriptionMod from "@/core/todo/schemas/validate-todo-description";
import * as makeNewTodoMod from "@/core/todo/factories/make-new-todo";

describe("makeValidatedTodo", () => {
  it("should call sanitizeStr function with correct value", () => {
    // Arrange
    const { description, sanitizeStrSpy } = makeMocks();

    // Act
    makeValidatedTodo(description);

    // Assert
    expect(sanitizeStrSpy).toHaveBeenCalled();
  });

  it("should call validateTodoDescription function with sanitizeStr return", () => {
    // Arrange
    const { description, sanitizeStrSpy, validaTodoDescriptionSpy } =
      makeMocks();

    // Act
    makeValidatedTodo(description);

    // Assert
    expect(validaTodoDescriptionSpy).toHaveBeenCalledWith(
      sanitizeStrSpy.mock.results[0].value
    );
  });

  it("should call makeNewTodo function if validateTodoDescription return success", () => {
    // Arrange
    const {
      description,
      sanitizeStrSpy,
      validaTodoDescriptionSpy,
      makeNewTodoSpy,
    } = makeMocks();

    // Act
    makeValidatedTodo(description);
    // Assert
    expect(makeNewTodoSpy).toHaveBeenCalledWith(
      sanitizeStrSpy.mock.results[0].value
    );
  });

  it("should return a valid todo if validateTodoDescription return success", () => {
    // Arrange
    const {
      description,
      sanitizeStrSpy,
      validaTodoDescriptionSpy,
      makeNewTodoSpy,
    } = makeMocks();

    // Act
    const todo = makeValidatedTodo(description);
  });

  it("should return a invalid todo if validateTodoDescription return invalid", () => {
    // Arrange
    const {
      description,
      sanitizeStrSpy,
      validaTodoDescriptionSpy,
      makeNewTodoSpy,
    } = makeMocks();

    // Act
    const todo = makeValidatedTodo(description);
  });
});

const makeMocks = (description = "abcd") => {
  const errors = ["any", "error"];

  const todo = {
    id: "any-id",
    description,
    createdAt: "any-date",
  };

  const sanitizeStrSpy = vi
    .spyOn(sanitizeStrMod, "sanitizeStr")
    .mockReturnValue(description);

  const validaTodoDescriptionSpy = vi
    .spyOn(validateTodoDescriptionMod, "validateTodoDescription")
    .mockReturnValue({
      errors: [],
      success: true,
    });

  const makeNewTodoSpy = vi
    .spyOn(makeNewTodoMod, "makeNewTodo")
    .mockReturnValue(todo);

  return {
    errors,
    todo,
    description,
    sanitizeStrSpy,
    validaTodoDescriptionSpy,
    makeNewTodoSpy,
  };
};
