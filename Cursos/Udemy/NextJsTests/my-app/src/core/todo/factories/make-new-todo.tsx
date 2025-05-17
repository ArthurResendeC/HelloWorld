import { Todo } from "@/core/todo/schemas/todo.model";

export function makeNewTodo(description: string) : Todo {
  return {
    id: crypto.randomUUID(),
    description,
    createdAt: new Date().toISOString(),
  };
}