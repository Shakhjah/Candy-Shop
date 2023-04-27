const products = [
    { id: 1, title: 'samsung galaxy s23 ultra', image: 'https://avatars.mds.yandex.net/get-mpic/1336510/img_id5193470031453206464.png/orig', price: 1000 },
    { id: 2, title: 'Товар 2', image: 'https://via.placeholder.com/100', price: 200 },
    { id: 3, title: 'Товар 3', image: 'https://via.placeholder.com/100', price: 300 },
    { id: 4, title: 'Товар 4', image: 'https://via.placeholder.com/100', price: 400 },
    { id: 5, title: 'Товар 5', image: 'https://via.placeholder.com/100', price: 500 },
    { id: 6, title: 'Товар 6', image: 'https://via.placeholder.com/100', price: 600 },
    { id: 7, title: 'Товар 7', image: 'https://via.placeholder.com/100', price: 700 },
    { id: 8, title: 'Товар 8', image: 'https://via.placeholder.com/100', price: 800 },
    { id: 9, title: 'Товар 9', image: 'https://via.placeholder.com/100', price: 900 },
    { id: 10, title: 'Товар 10', image: 'https://via.placeholder.com/100', price: 1000 },
  ];
  
  const cart = [];
  
  const productList = document.getElementById('product-list');
  const cartList = document.getElementById('cart-list');
  
  function renderProducts() {
    products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
  
      const img = document.createElement('img');
      img.src = product.image;
      div.appendChild(img);
  
      const title = document.createElement('h3');
      title.textContent = product.title;
      div.appendChild(title);
  
      const price = document.createElement('span');
      price.textContent = `$${product.price}`;
      div.appendChild(price);
  
      const button = document.createElement('button');
      button.textContent = 'Добавить в корзину';
      button.addEventListener('click', () => addToCart(product.id));
      div.appendChild(button);
      
      
      
      productList.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(product => product.id === id);
    localStorage.setItem('cart-list', product);
    
    cart.push(product);
    renderCart();
  }
  
  function renderCart() {
    if(localStorage.length > 0){
        console.log(typeof localStorage?.['cart-list'], 'BBBBBBBBBBBB');
        const savedValue = localStorage.getItem('cart-list');
        const that = document.createElement('div');
        that.innerText = savedValue;
        const obj = JSON.parse(savedValue);
        console.log(obj, 'VVVVVVVVVVVVVVVVV');
        cartList.appendChild(that);
        cartList.innerHTML = that;
      }
  
    cart.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
  
      const img = document.createElement('img');
      img.src = product.image;
      div.appendChild(img);
  
      const title = document.createElement('h3');
      title.textContent = product.title;
      div.appendChild(title);
  
      const price = document.createElement('span');
      price.textContent = `$${product.price}`;
      div.appendChild(price);
  
      const button = document.createElement('button');
      button.textContent = 'Убрать из корзины';
      button.addEventListener('click', () => removeFromCart(product.id));
      
      div.appendChild(button);
  
      cartList.appendChild(div);
    });
  
    const checkoutButton = document.querySelector('#cart button');
    if (cart.length > 0) {
      checkoutButton.removeAttribute('disabled');
    } else {
      checkoutButton.setAttribute('disabled', true);
    }
  }
  
  function removeFromCart(id) {
    const index = cart.findIndex(product => product.id === id);
    cart.splice(index, 1);
    renderCart();
  }

  console.log(localStorage, "AAAAAAAAAAAAAAAAAAAAAAAAA");

//   // Получаем элемент на странице
// const savedBut = document.getElementById('');

// // Получаем сохраненное значение в localStorage
// const savedValue = localStorage.getItem('my-value');

// // Если значение сохранено в localStorage, то заполняем поле на странице
// if (savedValue) {
//   input.value = savedValue;
// }

// // Сохраняем значение в localStorage при изменении на странице
// input.addEventListener('input', e => {
//   const newValue = e.target.value;
//   localStorage.setItem('my-value', newValue);
// });
  
  renderProducts();
  renderCart();