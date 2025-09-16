const express = require('express')
const router = express.Router()
 const {createProjects,
    getAllProjects,
    getProjects,
    updateProjects,
    deleteProjects
} = require('../controllers/project')

router.route('/').post(createProjects).get(getAllProjects)
router.route('/:id').post(updateProjects).post(deleteProjects).get(getProjects)

module.exports = router
