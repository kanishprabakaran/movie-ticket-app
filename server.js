const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/book">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="tickets">Number of Tickets:</label><br>
            <input type="number" id="tickets" name="tickets" required><br><br>
            <button type="submit">Book Tickets</button>
        </form>
    `);
});

app.post('/book', (req, res) => {
    const { name, tickets } = req.body;
    res.send(`Thank you, ${name}! You have successfully booked ${tickets} tickets.`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

