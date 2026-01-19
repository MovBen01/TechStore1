let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(name, price, image) {
cart.push({ name, price, image });
localStorage.setItem('cart', JSON.stringify(cart));
alert('Товар добавлен в корзину');
}


function renderCart() {
const container = document.getElementById('cart-items');
const totalEl = document.getElementById('total');
let total = 0;
container.innerHTML = '';


cart.forEach(item => {
total += item.price;
container.innerHTML += `
<div class="product">
<img src="${item.image}">
<h3>${item.name}</h3>
<p>${item.price} ₽</p>
</div>`;
});


totalEl.innerText = total + ' ₽';
}