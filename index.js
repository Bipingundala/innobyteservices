const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const EmployeeModel = require('./models/Employee');
const app = express();
app.use(express.json());
app.use(cors("http://localhost:5173"));

mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'sendermailid', // Your email
        pass: 'senderpassword' // Your email password
    }
});

// Function to send thank you email
function sendThankYouEmail(userEmail) {
    const mailOptions = {
        from: '"sendername" <sendermai@gmail.com>', // Sender address
        to: userEmail, // List of recipients
        text: 'Thank you for registering with us! ', // Plain text body
        subject: 'Thank You for Registering! ', // Subject line
        text: 'Thank you for registering with us!', // Plain text body
        html: '<b>Thank you for registering with us! this is the mail you have received from bipin created for innobyteservices nodejs internship Have a great day</b>' // HTML body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    }); 
}

// Register endpoint
app.post('/register', (req, res) => {
    const { email } = req.body; // Assuming email is part of the registration data

    EmployeeModel.create(req.body)
        .then(employee => {
            sendThankYouEmail(email); // Send thank you email
            res.status(201).json(employee);
        })
        .catch(err => {
            console.error("Error creating employee:", err);
            res.status(500).json({ error: "An error occurred while creating the employee." });
        });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "success", user: { id: user._id, name: user.name, email: user.email } });
                } else {
                    res.status(401).json("Password is incorrect");
                }
            } else {
                res.status(404).json("No user exists");
            }
        })
        .catch(err => {
            console.error("Error during login:", err);
            res.status(500).json({ error: "An error occurred during login." });
        });
});

// Profile endpoint (optional)
app.get('/profile/:id', (req, res) => {
    const userId = req.params.id;
    EmployeeModel.findById(userId)
        .then(user => {
            if (!user) return res.sendStatus(404);
            res.json({
                id: user._id,
                name: user.name,
                email: user.email,
            });
        })
        .catch(error => {
            console.error("Error fetching user profile:", error);
            res.status(500).json({ message: 'Server error' });
        });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});