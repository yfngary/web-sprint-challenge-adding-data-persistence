// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getAll()
        .then(Tasks => {
            const updatedTasks = Tasks.map((t) => {
                return {
                    ...t,
                    task_completed: t.task_completed ? true : false
                }
            })
            res.status(200).json(updatedTasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {

    Task.create(req.body)
        .then(task => {
            const newTask = {
                ...task[0],
                task_completed: task[0].task_completed ? true : false
            }
            res.status(201).json(newTask)
        })
        .catch(next)
})

// router.use((err, req, res, next) => { //eslint-disable-line
//     res.status(500).json({
//         customMessage: 'Something went wrong inside the projects router',
//         message: err.message,
//         stack: err.stack
//     })
// })

module.exports = router