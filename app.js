const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listens on ${PORT}`));

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/api/user', require('./api/user'));
