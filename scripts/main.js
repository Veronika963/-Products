const express = require('express');

const server = express();

server.get('/products', (req, res) => {
    res.send(products.slice(4));
});

// let ejs = require('ejs');
const products = require('./products');

// let html = ejs.render('<%= products.join(", "); %>', {products: products});

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.get('/', (req, res) => {
    res.render('main.ejs', {data: products.slice(0, 4)}); 
});

server.listen(3000);

