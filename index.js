const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Student } = require('../models/students');


// Get All STUDENT
router.get('/api/students', (req, res) => {
    Student.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// // Get Single STUDENT (First Way)

router.get('/api/students/:id', (req, res) => {
    Student.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

// Get Single STUDENT (2nd Way)...

router.get('/api/students/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    Student.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


// Save STUDENT
router.post('/api/students/add', (req, res) => {
    const std = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    std.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Student Added Successfully', addStudent: data})
        } else {
           console.log(err);
        }
    });
});



// // Update STUDENT

router.put('/api/students/update/:id', (req, res) => {


    const std = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    };
    Student.findByIdAndUpdate(req.params.id, { $set: std }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Student Updated Successfully', updateStudent: data})
        } else {
            console.log(err);
        }
    });
});




// // Delete STUDENT
router.delete('/api/students/:id', (req, res) => {

    Student.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Student deleted', deleteStudent: data})
        } else {
            console.log(err);
        }
    });
});


 module.exports = router;