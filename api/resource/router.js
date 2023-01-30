// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const resource1 = req.body

    Resource.create(resource1)
        .then(resource => {
            res.status(201).json(resource1)
        })
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router

