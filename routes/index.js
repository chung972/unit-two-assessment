var express = require('express');
var router = express.Router();
var todosCtrl = require("../controllers/todos");

/* GET home page. */
router.get('/', todosCtrl.index);
router.post("/todos", todosCtrl.new);
router.delete("/todos/:idx", todosCtrl.delete);

module.exports = router;
