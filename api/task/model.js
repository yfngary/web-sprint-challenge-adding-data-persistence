// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('tasks as t').join('projects as p', 't.project_id', '=', 'p.project_id')
}

const create = async (task) => {
    const [newTask] = await db('tasks').insert(task)
    console.log('newTask:', newTask)
    return findById(newTask)
 }

function findById(task_id) {
    return db('tasks').where({task_id})
}

module.exports = {
    getAll, 
    create
}