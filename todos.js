// store todos in array
var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

// display todos
console.log('My Todos:', todos);

// add new todo
todos.push('item 5');
console.log('Added \'item\ 5\'');

// display updated list
console.log('My Todos:', todos);

// update todo
todos[1] = 'item 2 Updated';
console.log('Updated \'item 2\'');

// display updated list
console.log('My Todos:', todos);

// delete a todo
todos.splice(0, 1);
console.log('Deleted \'item 1\'');

// display updated list
console.log('My Todos:', todos);