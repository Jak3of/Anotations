'use strict'

var express = require('express')

var ProjectController = require('../controllers/project')
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads'});

var router = express.Router()


router.get('/home', ProjectController.home );
router.post('/test', ProjectController.test );
router.post('/saveProject', ProjectController.saveProject );
router.get('/getProjects', ProjectController.getProjects );
router.get('/getProject/:id', ProjectController.getProject );
router.put('/updateProject/:id', ProjectController.updateProject );
router.delete('/deleteProject/:id',ProjectController.deleteProject );
router.post('/upload-image/:id', [md_upload], ProjectController.uploadImage )
router.get('/getImage/:image', ProjectController.getImageFile )

module.exports = router