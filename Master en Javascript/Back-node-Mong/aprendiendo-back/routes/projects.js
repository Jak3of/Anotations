'use strict'

var express = require('express')

var ProjectController = require('../controllers/project')

var router = express.Router()


router.get('/home', ProjectController.home );
router.post('/test', ProjectController.test );
router.post('/saveProject', ProjectController.saveProject );
router.get('/getProjects', ProjectController.getProjects );
router.get('/getProject/:id', ProjectController.getProject );
router.get('/updateProject/:id', ProjectController.updateProject );
router.get('/deleteProject/:id', ProjectController.deleteProject );

module.exports = router