const {Router} = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo, completeToggle } = require("../controllers/todoController");

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.post('/update', updateTodo);
router.post('/delete', deleteTodo);
router.post('/completeToggle', completeToggle)

module.exports = router;