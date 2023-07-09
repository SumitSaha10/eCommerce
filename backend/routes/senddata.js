const express = require("express")

const router = express.Router()
const Contact = require("../model/contactSchema")
const { body, validationResult } = require('express-validator');
router.post('/data', [
    body('name', "Name must be at least 3 characters").isLength({ minLength: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('message', "Message must be atleast 5 characters").isLength({ minLength: 5 })
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let contact = await Contact.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        success = true;
        res.json({ success, contact })
    }
    catch (err) {
        console.log("Some error occured")
        res.status(500).send("Some error occured")
    }
})

module.exports = router

