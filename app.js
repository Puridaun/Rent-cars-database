require('dotenv').config();
//success
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());


app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://rent-cars-app-production.up.railway.app/'
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

// Change image address 