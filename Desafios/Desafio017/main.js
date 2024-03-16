function toKebabCase(str){
  return str.split(" ").join("-").toLowerCase()
}

const form = document.getElementById("addTask")
const taskList = document.getElementById("taskList")

form.addEventListener("submit", function(event){
  event.preventDefault();

  const inputTask = document.getElementById("task");
  const userTaskText = inputTask.value;
  const deadline = document.getElementById("deadline");
  const userTaskDeadline = deadline.value;

  const newForm = document.createElement("form");
  const checkboxLabel = document.createElement("label");
  checkboxLabel.textContent = ` ${userTaskText} até ${userTaskDeadline.toLowerCase()}`
  const checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  
  taskList.appendChild(newForm);
  newForm.appendChild(checkbox);
  newForm.appendChild(checkboxLabel);
  checkboxLabel.htmlFor = userTaskText;
  checkbox.name = toKebabCase(userTaskText);

  event.target.reset();

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      checkboxLabel.innerHTML = `<del>${checkboxLabel.textContent}</del>`;
      
    } else {
      checkboxLabel.innerHTML =  `${checkboxLabel.textContent}`
      
    }
  });
})



