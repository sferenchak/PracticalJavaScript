# PracticalJavaScript
This is just a collection of code that is worked on during the Watch and Code Practical JavaScript course.

Throughout this course, various versions of a "Todos" application were created. I took what was created in the course and took it two iterations further to improve the UX/UI a bit. There is still much that could be done for the UI, but that wasn't the purpose of this particular course I took.

GitHub Pages link for "final" version: https://sferenchak.github.io/PracticalJavaScript/

## V1 Requirements
* It Should have a place to store todos
* It should have a way to display todos
* It should have a way to add new todos
* It should have a way to change a todo
* It should have a way to delete a todo

## V2 Requirements
* It should have a function to display todos
* It should have a function to add new todos
* It should have a function to change todos
* It should have a function to delete todos

## V3 Requirements
* It should store the todos array on an object
* It should have a displayTodos method
* It should have an addTodo method
* It should have a changeTodo method
* It should have a deleteTodo method

## V4 Requirements
* todoList.addTodo should add objects
* todoList.changeTodo should change the todoText property
* todoList.toggleCompleted should change the completed property

## V5 Requirements
* .displayTodos should show .todoText
* .displayTodos should tell you if .todos is empty
* .displayTodos should show .completed

## V6 Requirements
* .toggleAll: If everything is true, make everything false.
* .toggleAll: Otherwise, make everything true.

## V7 Requirements
* There should a be "Dislay todos" button and "Toggle all" button in the app.
* Clicking "Display todos" should run todoList.displayTodos.
* Clicking "Toggle all" should run todoList.toggleAll.

## V8 Requirements
* It should have working controls for .addTodo
* It should have working controls for .changeTodo
* It should have working controls for .deleteTodo
* It should have working controls for .toggleCompleted

## V9 Requirements
* There should be an li element for every todo
* Each li element should contain .todoText
* Each li element should show .completed

## V10 Requirements
* There should be a way to create delete buttons
* There should be a delete button for each todo
* Each li should have an id that has the todo position
* Delete buttons should have access to the todo id
* Clicking delete should update todoList.todos and the DOM

## V11 Requirements
* todoList.toggleAll should use forEach (Already done in previous version)
* view.displayTodos should use forEach (Already don ein previous version)

# My Own changes to improve UX/UI a bit
## V12 Requirements
* Each todo should have an icon that can be clicked
* Clicking on the icon should toggle the completion status in todoList.todos and the DOM

## V13 Requirements
* Clicking on todo text should allow for direct change
* Show Cancel and Save button when editing todo
* Clicking Cancel will revert back to the old todo text
* Clicking Save will update the todo text
