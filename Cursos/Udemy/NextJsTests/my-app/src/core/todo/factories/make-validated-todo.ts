import { makeNewTodo } from "@/core/todo/factories/make-new-todo";
import { Todo } from "@/core/todo/schemas/todo.model";
import { validateTodoDescription } from "@/core/todo/schemas/validate-todo-description";
import { sanitizeStr } from "@/utils/sanitize-str";

type ValidTodo = {
  success: true;
  data: Todo;
};

type InvalidTodo = {
  success: false;
  errors: string[];
};

type ValidatedTodo = ValidTodo | InvalidTodo;

export function makeValidatedTodo(description: string): ValidatedTodo {
  const cleanDescription = sanitizeStr(description);
  const validatedDescription = validateTodoDescription(cleanDescription);
  if (validatedDescription.success) {
    return {
      success: true,
      data: makeNewTodo(cleanDescription),
    };
  }

  return {
    success: false,
    errors: validatedDescription.errors,
  };
}
