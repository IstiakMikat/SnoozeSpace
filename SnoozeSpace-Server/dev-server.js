const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Mock data for development
app.get('/rooms', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Deluxe Room",
            description: "A comfortable deluxe room with all amenities",
            pricePerNight: 150,
            image: "/Images/room1.jpg"
        },
        {
            id: 2,
            title: "Standard Room",
            description: "A cozy standard room perfect for studying",
            pricePerNight: 100,
            image: "/Images/room2.jpg"
        },
        {
            id: 3,
            title: "Premium Suite",
            description: "Luxurious suite with premium facilities",
            pricePerNight: 200,
            image: "/Images/room3.jpg"
        }
    ]);
});

app.get('/studyRooms', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Group Study Room A",
            description: "Large study room for group collaboration",
            image: "/Images/study1.jpg"
        },
        {
            id: 2,
            title: "Quiet Study Room B",
            description: "Peaceful individual study space",
            image: "/Images/study2.jpg"
        },
        {
            id: 3,
            title: "Tech Study Room C",
            description: "Study room with computer access",
            image: "/Images/study3.jpg"
        }
    ]);
});

// Other mock endpoints
app.get('/feedback', (req, res) => res.json([]));
app.get('/payments', (req, res) => res.json([]));
app.get('/bookings', (req, res) => res.json([]));
app.get('/users', (req, res) => res.json([]));

// POST endpoints that just acknowledge
app.post('/rooms', (req, res) => res.json({ message: "Room added (mock)" }));
app.post('/studyRooms', (req, res) => res.json({ message: "Study room added (mock)" }));
app.post('/feedback', (req, res) => res.json({ message: "Feedback submitted (mock)" }));
app.post('/payments', (req, res) => res.json({ message: "Payment processed (mock)" }));
app.post('/bookings', (req, res) => res.json({ message: "Booking created (mock)" }));
app.post('/users', (req, res) => res.json({ message: "User added (mock)" }));

app.get('/', (req, res) => {
    res.send('SnoozeSpace Development Server is running with mock data!')
})

app.listen(port, () => {
    console.log(`Development server working on port: ${port}`);
    console.log('Using mock data - MongoDB connection disabled');
})