#! /usr/bin/env node

import inquirer from "inquirer";

// decleare a variable to store the todos array
let todos = [];

// decleare a variable to store the condition
let condition = true;

// ask the user to enter the todos
while (condition) {
  let todosQuestion = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What would you like to add in your todos",
    },
    {
      name: "secondQuestion",
      type: "confirm",
      message: "Would you like to add more in your todos",
      default: "true",
    },
  ]);

  // add the todos in the todos array
  todos.push(todosQuestion.firstQuestion);
  console.log(todos);
  condition = todosQuestion.secondQuestion;
}
