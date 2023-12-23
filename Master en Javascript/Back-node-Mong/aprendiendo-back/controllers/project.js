'use strict'

var Project = require('../models/project');


var controller = {
    home: function(req, res) {
        return res.status(200).json({ 
            message: 'In Home'
        });

    },

    test: function(req, res) {
        return res.status(200).json({ 
            message: 'In Test'
        });
    },

    saveProject: async function (req, res) {
        // Verificar que se proporcionen todos los campos necesarios
        const requiredFields = ['name', 'description', 'category', 'year', 'langs'];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({
                    message: `Falta el campo requerido: ${field}`
                });
            }
        }
    
        var project = new Project();
    
        project.name = req.body.name;
        project.description = req.body.description;
        project.category = req.body.category;
        project.year = req.body.year;
        project.langs = req.body.langs; // String
        project.image = null;
    
        try {
            const projectStored = await project.save();
            return res.status(200).json({
                project: projectStored,
                message: 'Project saved'
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error al guardar el Proyecto',
                error: error.message
            });
        }
    },
    getProjects: async function (req, res) {
        try {
            const projects = await Project.find( {}).sort('year');
            return res.status(200).json({
                projects
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error al obtener los Proyectos',
                error: error.message
            });
        }
    },
    getProject: async function (req, res) {
        try {
            const project = await Project.findById(req.params.id);
            return res.status(200).json({
                project
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error al obtener el Proyecto',
                error: error.message
            });
        }
    },
    updateProject: async function (req, res) {
        try {
            const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json({
                project
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error al actualizar el Proyecto',
                error: error.message
            });
        }
    },
    deleteProject: async function (req, res) {
        try {
            const project = await Project.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                project
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error al borrar el Proyecto',
                error: error.message
            });
        }
    }
};

module.exports = controller;
// mediante require('./controllers/project') puedes importar el controlador