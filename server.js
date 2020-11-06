const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const cartService = require('./cart.service');
const foodItems = require('./data/food-items');

let cart = [];
const port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static("client/build"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/food-items', (req, res) => {
    res.send(foodItems);
});

app.get('/api/cart', (req, res) => {
    res.send(cart);
});

app.post('/api/food-item', jsonParser, (req, res) => {
    cart = cartService.add(req.body, cart);
    io.emit('cart_update', cart);
    res.sendStatus(200);
});

app.delete('/api/food-item', jsonParser, (req, res) => {
    cart = cartService.remove(req.body, cart);
    io.emit('cart_update', cart);
    res.sendStatus(200);
});

app.put('/api/food-item', jsonParser, (req, res) => {
    cart = cartService.replace(req.body, cart);
    io.emit('cart_update', cart);
    res.sendStatus(200);
});

http.listen(port, () => {
    console.log(`listening on ${port}`);
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


