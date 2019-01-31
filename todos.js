'use strict';

// todoList object
const todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos:");
    // if todos exist, then print them out
    if (this.todos.length > 0) {
      this.todos.forEach(function(todo) {
        if (todo.completed === true) {
            console.log("(x}", todo.todoText);
        } else {
            console.log("( }", todo.todoText);
        }
      });
    // if there are no todos, print a user friendly message
    } else {
        console.log("You have nothing to do. Go play games!")
    }
  },
  addTodo: function(todoText) {
    // add a todo object
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    console.log("Added", todoText);
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    let oldText = this.todos[position].todoText;
    this.todos[position].todoText = todoText;
    console.log("Changed", oldText, "to", todoText);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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

    // If everything is true, make everything false;
    if (completedTodos === totalTodos) {
      this.todos.forEach(function(todo) {
        todo.completed = false;
      });
    } else { // Otherwise make everything true.
      this.todos.forEach(function(todo) {
        todo.completed = true;
      })
    }
    this.displayTodos();
  },
  deleteTodo: function(position) {
    let oldTodo = this.todos[position];
    this.todos.splice(position, 1);
    console.log("Deleted", oldTodo);
    this.displayTodos();
  }
};

// add new todo
todoList.addTodo("new todo 1");
todoList.addTodo("new todo 2");
todoList.addTodo("new todo 3");

// change todo
todoList.changeTodo(1, "item 2 Updated");

// delete a todo
todoList.deleteTodo(1);

const displayTodosBtn = document.querySelector('#displayTodos');
const toggleAllBtn = document.querySelector('#toggleAll');

displayTodosBtn.addEventListener('click', function() {
  todoList.displayTodos();
});
toggleAllBtn.addEventListener('click', function() {
  todoList.toggleAll();
})