const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  Todo.fetchAll((todos) => {
    res.status(200).json(todos);
  });
};
