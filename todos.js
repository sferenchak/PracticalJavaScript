// todoList object
const todoList = {
    todos: ["item 1", "item 2", "item 3", "item 4"],
    displayTodos: function() {
        console.log("My Todos:", this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        console.log("Added", todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        let oldValue = this.todos[position];
        this.todos[position] = newValue;
        console.log("Changed", oldValue, "to", newValue);
        this.displayTodos();
    },
    deleteTodo: function(position) {
        let oldValue = this.todos[position];
        this.todos.splice(position, 1);
        console.log("Deleted", oldValue);
        this.displayTodos();
    }
}

// display todos
todoList.displayTodos();

// add new todo
todoList.addTodo("new todo");

// change todo
todoList.changeTodo(1, 'item 2 Updated')

// delete a todo
todoList.deleteTodo(1);