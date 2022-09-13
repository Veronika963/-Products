const button = document.querySelector('.products-button');
const cards = document.querySelector('.cards');

button.addEventListener('click', (ev) => {
    fetch('/products')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                cards.innerHTML += `
                    <li>
                        <a href="#" class="products_item">
                            <h3 class="product_name">
                                ${element.name}
                            </h3>
                            <img src="${element.img}" alt="iPhone 11" class="product_img">
                            <div class="specifications">
                                ${element.info.map(item => {
                                    return `<div class="specifications_item">
                                        <div class="specification_name">
                                            ${item.key}
                                        </div>
                                        <p class="specification_text">
                                            ${item.value}
                                        </p>
                                    </div>` 
                                }).join('')}    
                            </div>
                            <div class="product_price">
                                <div class="product_new_price">
                                    ${element.price}
                                </div>
                                <div class="product_old_price">
                                    ${element.oldPrice}
                                </div>
                            </div>
                        </a>
                    </li>
                `
            });
        })
})