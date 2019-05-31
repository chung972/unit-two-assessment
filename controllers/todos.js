const Todos = require("../data/todos");

module.exports = {
    index,
    new: newTodo,
    delete: deleteTodo
}

function index(req, res){
    res.render("index", {
        Todos
    });
}

function newTodo(req, res){
    req.body.done = false;
    Todos.push(req.body);
    res.redirect("/");
}

function deleteTodo(req, res){
    Todos.splice(req.params.idx, 1);
    res.redirect("/");
}