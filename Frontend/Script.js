document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('products');
        data.forEach(product => {
            const el = document.createElement('div');
            el.innerHTML = <h3>${product.name}</h3><p>Цена: $${product.price}</p>;
            container.appendChild(el);
        });
    })
    .catch(err => {
        console.error('Ошибка при загрузке:', err);
    });
});
