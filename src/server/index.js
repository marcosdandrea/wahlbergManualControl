const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { globals } = require('../../globals');
const cors = require('cors');
const io = new Server(server, {
  cors: true
});
const path = require('path');
const artnetServices = require("../services/artnet.services")

app.use(cors())
app.use(express.static(path.join(__dirname, "..", "..", "app", "dist")))

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on("setBottomLimit", artnetServices.handleOnSetBottomLimit)
  socket.on("setTopLimit", artnetServices.handleOnSetTopLimit)
  
});

server.listen(globals.SERVER_PORT, () => {
  console.log(`listening on ${globals.SERVER_PORT}`);
});