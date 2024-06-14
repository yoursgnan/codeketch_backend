
const WorkspaceModel = require('../models/workspace')

const workspaceRouter = require('express').Router()

workspaceRouter.post('/',async(request, response)=>{
    try{
        const workspaceData = {...request.body,userId: request.user.id}
        console.log('data got',request.body,workspaceData)
        const newWorkspace = new WorkspaceModel(workspaceData)
        const createdWorkspace = await newWorkspace.save()
        response.status(200).json(createdWorkspace)
    }
    catch(error){
        console.log('error',error)
        response.status(400).json({error:error})
    }
})

workspaceRouter.get('/',async(request,response)=>{
    try{
        const workspaces = await WorkspaceModel.findAll({
            where: {
                userId: request.user.id
            }
        })
        response.status(200).json(workspaces)
    }
    catch(error){
        response.status(400).json({error:error})
    }
})

module.exports = workspaceRouter