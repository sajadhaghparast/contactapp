const todoUtils = require("../utils/todos");

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    todoUtils.getTodos((todos) => {
      todos.push(this)
      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }

  static fetchAll(callback) {
    todoUtils.getTodos((todos) => {
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      todoUtils.saveTodos(
        todos.filter((t) => t.id != id),
        (err) => {
          callback(err);
        }
      );
    });
  }
}

module.exports = Todo;
