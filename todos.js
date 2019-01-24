// todoList object
var todoList = {
    todos: [],
    displayTodos: function() {
        console.log("My Todos:", this.todos);
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
    deleteTodo: function(position) {
        let oldTodo = this.todos[position];
        this.todos.splice(position, 1);
        console.log("Deleted", oldTodo);
        this.displayTodos();
    }
}

// display todos
todoList.displayTodos();

// add new todo
todoList.addTodo("new todo 1");
todoList.addTodo("new todo 2");
todoList.addTodo("new todo 3");

// change todo
todoList.changeTodo(1, 'item 2 Updated')

// delete a todo
todoList.deleteTodo(1);