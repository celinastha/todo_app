const todoModel = require('../models/todoModel')

module.exports.getTodo = async (req, res) => {
    const todo = await todoModel.find()
    res.send(todo)
}

module.exports.saveTodo = async (req, res) => {
    const {text} = req.body;

    todoModel
        .create({text, tags: 'all'})
        .then((data) => {
            console.log("Added successfully");
            console.log(data);
            res.send(data)
        })
        .catch((err) => console.log(err))
}

module.exports.updateTodo = async (req, res) => {
    const {_id, text} = req.body
    todoModel
        .findByIdAndUpdate(_id, {text})
        .then(() => res.send("Updated Successfully"))
        .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body
    todoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully"))
        .catch((err) => console.log(err))
}

module.exports.completeToggle = async (req, res) => {
    const {_id} = req.body;
    const todo = await todoModel.findById(_id);
    
    if(todo.tags.includes("complete")){
        await todoModel
        .findByIdAndUpdate(_id, {$pull: {tags:"complete"}})
        .then(() => res.send("Todo is incomplete"))
        .catch((err) => console.log(err))
    }
    else{
        await todoModel
        .findByIdAndUpdate(_id, {$addToSet: {tags: "complete"}})
        .then(() => res.send("Todo completed"))
        .catch((err) => console.log(err))
    }
}