const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());

// Path to the passphrase file
const passphrasePath = path.join(__dirname, 'passphrase.txt');

// Define the expected passphrase
const expectedPassphrase = 'ifyoucannotsaywhatyoumeanyoucannotmeanwhatyousay'; // Change this to your actual expected passphrase

app.get('/check-passphrase', (req, res) => {
    if (fs.existsSync(passphrasePath)) {
        const passphrase = fs.readFileSync(passphrasePath, 'utf8').trim();
        if (passphrase === expectedPassphrase) {
            res.json({ canStart: true });
        } else {
            res.json({ canStart: false });
        }
    } else {
        res.json({ canStart: false });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
