const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 4500;

// Middleware setup
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route to get all data from Alldata.json
app.get("/alldata", (req, res) => {
    try {
        // Read the contents of Alldata.json file
        fs.readFile('./Alldata.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the JSON file:', err);
                return res.status(500).json({ success: false, message: 'Error reading data file' });
            }

            try {
                // Parse the JSON data
                const products = JSON.parse(data);
                res.status(200).json({ success: true, products });
            } catch (parseError) {
                console.error('Error parsing JSON data:', parseError);
                res.status(500).json({ success: false, message: 'Error parsing JSON data' });
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.get("/alldatapurches", (req, res) => {
    try {
        // Read the contents of Alldata.json file
        fs.readFile('./purches.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the JSON file:', err);
                return res.status(500).json({ success: false, message: 'Error reading data file' });
            }

            try {
                // Parse the JSON data
                const products = JSON.parse(data);
                res.status(200).json({ success: true, products });
            } catch (parseError) {
                console.error('Error parsing JSON data:', parseError);
                res.status(500).json({ success: false, message: 'Error parsing JSON data' });
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
