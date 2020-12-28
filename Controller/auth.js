const express = require('express')
const router = express.Router()

const {  getcollegedata  ,postcollegedata , getcollegedatabyid, collegedataupdatewhole,collegedataupdateonce, collegedatabyonce,collegedatadelete} = require("../RouteF/auth")
//const {createEmploy,EmployDelete,EmployupdatebyIdAll,EmployupdatebyIdOnce} = require("../RouteF/auth")
const {getstudentbyid , getstudentdata , poststudent , studentdatadelete , Studentupdatewhole,Studentupdatebyonce } = require("../RouteF/auth")
const {createEmploy,EmployDelete,EmployupdatebyIdAll,EmployupdatebyIdOnce,getEmploydata,getEmploybyid} = require("../RouteF/auth")

//  for college crud router
router.get('/college', getcollegedata)//
router.post('/college', postcollegedata)//
router.get('/college/:collegeId', getcollegedatabyid)//
router.put('/collage', collegedataupdatewhole)//
router.patch('/collage', collegedataupdateonce)//
router.delete('/collage/:collegeId', collegedatadelete)//
//router.delete('/Email-activation', mailactivation)

//  fffor student crud router

router.get('/student/:studentId', getstudentbyid)//
router.get('/student', getstudentdata)//
router.post('/student', poststudent)
router.delete('/student/:studentId',studentdatadelete)
router.put('/student', Studentupdatewhole)
router.patch('/student', Studentupdatebyonce)




/// for Employ crud router

//router.post('/:userId/Employ', createEmploy)
//router.delete('/:userId/Employ', EmployDelete)
//router.put('/:userId/Employ', EmployupdatebyIdAll)
//router.patch('/:userId/Employ', EmployupdatebyIdOnce)

router.post('/employ', createEmploy)
router.delete('/employ/:EmployId', EmployDelete)
router.put('/employ', EmployupdatebyIdAll)
router.patch('/employ', EmployupdatebyIdOnce)
router.get('/employ/:EmployId', getEmploybyid)//
router.get('/employ', getEmploydata)//

module.exports = router  