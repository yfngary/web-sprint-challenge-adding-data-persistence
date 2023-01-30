// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

function getById(id) {
    return db('resources').where('resource_id', id).first()
}

const create = (resource) => {
    return db('resources').insert(resource)
}

module.exports = {
    getAll,
    getById,
    create
}