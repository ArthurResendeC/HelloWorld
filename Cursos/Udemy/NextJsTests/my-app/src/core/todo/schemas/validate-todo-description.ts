
type validateTodoDescription = {
  success: boolean;
  errors: string[];
};

export function validateTodoDescription(
  description: string
): validateTodoDescription {
  const errors: string[] = [];
  if (description.length <= 3) {
    errors.push("Description must be at least 3 characters long");
  }

  // Outras validações
  
  return {
    success: errors.length === 0,
    errors,
  };
}
