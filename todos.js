// store todos in array
var todos = ["item 1", "item 2", "item 3", "item 4"];

// display todos
function displayTodos() {
  console.log("My Todos:", todos);
}
displayTodos();

// add new todo
function addTodo(todo) {
    todos.push(todo);
    console.log("Added", todo);
    displayTodos();
}
addTodo("new todo");

// change todo
function changeTodo(position, newValue) {
    let oldValue = todos[position];
    todos[position] = newValue;
    console.log("Changed", oldValue, "to", newValue);
    displayTodos();
}
changeTodo(1, 'item 2 Updated')

// delete a todo
function deleteTodo(position) {
    let oldValue = todos[position];
    todos.splice(position, 1);
    console.log("Deleted", oldValue);
    displayTodos();
}
deleteTodo(1);
