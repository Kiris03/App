const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('frontend')); // Обязательно!

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "iPhone", price: 1200 },
        { id: 2, name: "Samsung", price: 900 }
    ]);
});

app.post('/api/products', (req, res) => {
    const product = req.body;
    console.log("Добавлен товар:", product);
    res.status(201).send("Товар добавлен");
});

app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});
