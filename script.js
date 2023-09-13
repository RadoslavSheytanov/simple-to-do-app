// Waits for the document to be fully loaded before executing the contained code.
document.addEventListener("DOMContentLoaded", function () {

  // References the form element for later use.
  const form = document.querySelector("form");

  // References the input field where users type their tasks.
  const input = document.querySelector("#input");

  // References the list (ul) where tasks will be displayed.
  const list = document.querySelector("#list");

  // Attaches a submit event listener to the form. This will be triggered when the user submits the form.
  form.addEventListener("submit", function (event) {

    // Prevents the default form submission behavior, which would refresh the page.
    event.preventDefault();

    // Gets the value from the input field and trims any extra white space.
    const taskValue = input.value.trim();

    // Checks if the user has entered a value.
    if (taskValue) {

      // Creates a new list item (li) element.
      const listItem = document.createElement("li");

      // Sets the text content of the list item to the value entered by the user.
      listItem.textContent = taskValue;

      // Creates a delete button for the task.
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      // Attaches a click event listener to the delete button, which will remove the task when clicked.
      deleteButton.addEventListener("click", function () {

        // Removes the task (list item) from the list.
        list.removeChild(listItem);
      });

      // Appends the delete button to the list item.
      listItem.appendChild(deleteButton);

      // Appends the fully constructed list item (with delete button) to the list.
      list.appendChild(listItem);
    }

    // If the input field is empty, it alerts the user to enter a task.
    if (taskValue == "")
      return alert("Input field empty. Please write a task.");

    // Clears the input field so that it's ready for the next task input.
    input.value = "";
  });
});
