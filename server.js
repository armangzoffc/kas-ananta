const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 19140;

// Melayani file statis (html, js, css)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
