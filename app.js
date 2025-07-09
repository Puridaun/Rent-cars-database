require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

// Updated CORS for both development and production
app.use(cors({
    origin: [
        'http://localhost:5173',  // For local development
        'https://react-app-rent-cars-production.up.railway.app'  // For production
    ],
    credentials: true
}));

const rentCarsRoutes = require('./src/rent-cars/routes');

app.get('/', (req, res) => {
    res.send("Good job")
})

app.use('/api/v1/rent-cars', rentCarsRoutes)

// Fixed: Use PORT || 3000 as fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})