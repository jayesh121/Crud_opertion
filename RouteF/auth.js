const express = require('express')
const Post = require('../models/user');// for college Schema
const Student = require('../models/Student');// for student Schema
const Employ = require('../models/Employ');// for student Schema


// for collage
//create
//delete
//read
//update
exports.postcollegedata = (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
}
exports.getcollegedata = (req, res) => {
    Post.find().exec((err, posts) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, posts: posts })
    })
}
exports.getcollegedatabyid = async (req, res) => {
    const { userId } = req.params
    const user = await Post.findById(userId)
    res.status(200).json(user)
}
exports.collegedataupdatewhole = async (req, res) => {
    const collegeid  = req.params._id
    const Updated = req.body
    const user = await Post.findByIdAndUpdate(collegeid, Updated)
    res.status(200).json({ success: true })
}
exports.collegedataupdateonce = async (req, res) => {
    const collegeid  = req.body.id
    const Updated = req.body
    const user = await Post.findByIdAndUpdate(collegeid, Updated)
    //const user = await Post.findOneAndUpdate(userId, Updated)
    res.status(200).json({ success: true })
}
exports.collegedatadelete = async (req, res) => {
    const { collegeid } = req.params
    const user = await Post.findByIdAndDelete(collegeid)
    res.status(200).json(user)
}

// for Student
//create
//delete
//read
//update
exports.poststudent = async (req, res) => {
    const collegeid = req.body.id;
    const newUser = new Student(req.body)
    const user = await Post.findById(collegeid)
    newUser.student = user
    await newUser.save()
    user.stud.push(newUser)
    await user.save()
    res.status(200).json({success: true})
}
exports.getstudentdata = async (req, res) => {
        const students = await Student.find({})
        res.status(200).json(students)
}
exports.getstudentbyid = async (req, res) => {
    const {studentId} = req.params
    const user = await Student.findById(studentId)
    res.status(200).json(user)
}
exports.studentdatadelete = async (req, res) => {
    const { studentId } = req.params
    const user = await Student.findByIdAndDelete(studentId)
    res.status(200).json(user)
}
exports.Studentupdatewhole = async (req, res) => {
    const  studentId = req.body.id
    const Updated = req.body
    const user = await Student.findByIdAndUpdate(studentId, Updated)
    res.status(200).json({ success: true })
}
exports.Studentupdatebyonce = async (req, res) => {
    const  studentId  = req.body.id
    const Updated = req.body
    const user = await Student.findByIdAndUpdate(studentId, Updated)
    res.status(200).json({ success: true })
}
/////////
// Employ CRUD
exports.createEmploy = async (req, res) => {
    const  employid  = req.body.id;
    const newUser = new Employ(req.body)
    const user = await Post.findById(employid)
    newUser.Employ = user
    await newUser.save()
    user.Empl.push(newUser)
    await user.save()
    res.status(201).json(newUser)
}

exports.EmployDelete = async (req, res) => {
    const { userId } = req.params
    const user = await Employ.findByIdAndDelete(userId)
    res.status(200).json(user)
}
exports.EmployupdatebyIdAll = async (req, res) => {
    const { userId } = req.params
    const Updated = req.body
    const user = await Employ.findByIdAndUpdate(userId, Updated)
    res.status(200).json({ success: true })
}
exports.EmployupdatebyIdOnce = async (req, res) => {
    const { userId } = req.params
    const Updated = req.body
    const user = await Employ.findByIdAndUpdate(userId, Updated)
    res.status(200).json({ success: true })
}

exports.getEmploydata = async (req, res) => {
    const students = await Employ.find({})
    res.status(200).json(students)
}
exports.getEmploybyid = async (req, res) => {
const {EmployId} = req.params
const user = await Employ.findById(EmployId)
res.status(200).json(user)
}