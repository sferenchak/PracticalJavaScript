"use strict";

// todoList object
const todoList = {
  todos: [],
  addTodo: function(todoText) {
    // add a todo object
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Get number of completed todos.
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      // If everything is true, make everything false;
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        // Otherwise make everything true.
        todo.completed = true;
      }
    });
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  }
};

const view = {
  displayTodos: function() {
    let todosOL = document.querySelector("#todoListDisplay>ol");
    todosOL.innerHTML = "";
    if (todoList.todos.length > 0) {
      todoList.todos.forEach(function(todo, position) {
        let todoLi = document.createElement("li");

        todoLi.id = position;
        todoLi.appendChild(this.createTodoSpan(todo.todoText));
        if (todo.completed === true) {
          todoLi.prepend(this.createCompletionIcon());
        } else {
          todoLi.prepend(this.createIncompleteIcon());
        }
        todoLi.appendChild(this.createDeleteButton());
        todosOL.appendChild(todoLi);
      }, this);
    } else {
      todosOL.innerHTML = "You have nothing to do. Go play games!";
    }
  },
  createTodoSpan: function(todoText) {
    let todoSpan = document.createElement("span");
    todoSpan.textContent = todoText;
    todoSpan.className = "todoText";
    return todoSpan;
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  createSaveButton: function() {
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "saveButton";
    return saveButton;
  },
  createCancelButton: function() {
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className = "cancelButton";
    return cancelButton;
  },
  createIncompleteIcon: function() {
    let completionIcon = document.createElement("i");
    completionIcon.classList = "far fa-circle";
    return completionIcon;
  },
  createCompletionIcon: function() {
    let completionIcon = document.createElement("i");
    completionIcon.classList = "far fa-check-circle";
    return completionIcon;
  },
  toggleEditTodo: function(span) {
    if (span && span.style.display === "") {
      span.parentNode.className = "todoText editing";
      span.style.display = "none";
      let editTodoInput = document.createElement("input");
      let oldText = span.textContent;
      editTodoInput.value = oldText;
      editTodoInput.type = "text";
      editTodoInput.id = "todoEdit";
      span.parentNode.insertBefore(editTodoInput, span);
      span.parentNode.insertBefore(view.createCancelButton(), span);
      span.parentNode.insertBefore(view.createSaveButton(), span);
    } else {
      let todoEdit = document.querySelector("#todoEdit");
      let span = document.querySelector(".editing>span");
      let cancelButton = document.querySelector(".cancelButton");
      let saveButton = document.querySelector(".saveButton");
      span.style.display = "";
      span.parentNode.className = "todoText";
      span.parentNode.removeChild(cancelButton);
      span.parentNode.removeChild(saveButton);
      todoEdit.parentNode.removeChild(todoEdit);
    }
  },
  setUpEventListeners: function() {
    const todosOLEvent = document.querySelector("#todoListDisplay>ol");

    todosOLEvent.addEventListener("click", function(event) {
      // Get the element that was clicked
      let elementClicked = event.target;

      // Check if elementClicked is a delete button.
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      } else if (elementClicked.classList[0] === "far") {
        // Check if element Clicked is a completion icon
        handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
      } else if (elementClicked.className === "todoText") {
        // Check if element clicked is existing todo text
        view.toggleEditTodo(elementClicked);
      } else if (elementClicked.className === "saveButton") {
        // Check if element clicked is Save button
        handlers.changeTodo(parseInt(elementClicked.parentNode.id));
      } else if (elementClicked.className === "cancelButton") {
        // Check if element cliecked is Cancel button
        view.toggleEditTodo();
      }
    });
  }
};

const handlers = {
  addTodo: function() {
    let addTodoText = document.getElementById("newTodo");
    todoList.addTodo(addTodoText.value);
    addTodoText.value = "";
    view.displayTodos();
  },
  changeTodo: function(position) {
    let todoEdit = document.querySelector("#todoEdit");
    let newTodoText = todoEdit.value;
    todoEdit.parentNode.removeChild(todoEdit);
    todoList.changeTodo(position, newTodoText);
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  }
};

view.setUpEventListeners();
