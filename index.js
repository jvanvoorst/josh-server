const app = require("express")();
const cartService = require('./cart.service');
const bodyParser = require('body-parser');
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const foodItems = require("./data/food-items");
let cart = [];

const jsonParser = bodyParser.json();

console.log('cart', cart);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/food-items", (req, res) => {
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
    io.emit("cart_update", cart);
    res.sendStatus(200);
});

app.put('/api/food-item', jsonParser, (req, res) => {
    cart = cartService.replace(req.body, cart);
    io.emit('cart_update', cart);
    res.sendStatus(200);
})

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

//   socket.on("chat message", (msg) => {
//     console.log("message: " + msg);
//     io.emit("chat message", msg);
//   });
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
