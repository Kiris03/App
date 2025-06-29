const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Начальные данные
let products = [
    { id: 1, name: "iPhone", price: 1200 },
{ id: 2, name: "Samsung", price: 900 },
{ id: 3, name: "Футболка", price: 20 },
{ id: 4, name: "Джинсы", price: 50 }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products', (req, res) => {
    const product = req.body;
    // Генерируем новый ID
    product.id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    // Добавляем товар в массив
    products.push(product);
    console.log("Добавлен товар:", product);
    res.status(201).json(product); // Возвращаем добавленный товар
});

app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});
