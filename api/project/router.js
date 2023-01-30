// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            const updatedProjects = projects.map((p) => {
                return {...p, project_completed: p.project_completed ? true : false}
            })
            res.status(200).json(updatedProjects)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {

    Project.create(req.body)
        .then(project => {
            const updatedProject = {
                ...project,
                project_completed: project.project_completed ? true : false
            }
            res.status(201).json(updatedProject)
        })
        .catch(next)
})

// // router.use((err, req, res, next) => { 
// //     res.status(500).json({
// //         customMessage: 'Something went wrong inside the projects router',
// //         message: err.message,
// //         stack: err.stack
// //     })
// })

module.exports = router


