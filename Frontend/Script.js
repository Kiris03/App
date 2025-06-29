document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products');
    const form = document.getElementById('productForm'); // Форма для добавления товара

    // Функция для отображения товаров
    function displayProducts(products) {
        container.innerHTML = ''; // Очищаем контейнер перед обновлением
        products.forEach(product => {
            const el = document.createElement('div');
            el.innerHTML = `<h3>${product.name}</h3><p>Цена: $${product.price}</p>`;
            container.appendChild(el);
        });
    }

    // Загрузка товаров с сервера
    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => displayProducts(data))
    .catch(err => console.error('Ошибка при загрузке:', err));

    // Отправка нового товара на сервер (POST)
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Отменяем стандартную отправку формы

            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;

            fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price }), // Данные товара
            })
            .then(res => res.text())
            .then(message => {
                console.log(message); // "Товар добавлен"
                // Обновляем список товаров после добавления
                fetch('http://localhost:3000/api/products')
                .then(res => res.json())
                .then(data => displayProducts(data));
            })
            .catch(err => console.error('Ошибка:', err));
        });
    }
});
