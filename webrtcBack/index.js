const express = require('express');
const port = 8000;
const app = express();
const bodyparser = require('body-parser');
const { Server } = require('socket.io');
const io = new Server({
  cors: true
});


app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello Sir");
});

const EmailToSocketMapping = new Map();
const SocketToEmailMapping= new Map();

io.on("connection", (socket) => {

  console.log("New Connection");

  socket.on('join-room', (data) => {

    const { roomId, emailId } = data;

    console.log(`User ${emailId} Joined ${roomId}`);

    EmailToSocketMapping.set(emailId, socket.id);

    SocketToEmailMapping.set(socket.id,emailId);

    console.log("Socket Id is : ",socket.id);

    socket.join(roomId);

    socket.emit('joined-room',{roomId});

    socket.broadcast.to(roomId).emit("User-Joined", { emailId });
  })

  socket.on("Call-User",data=>{

    const {emailId ,offer}=data;

    const fromWho=SocketToEmailMapping.get(socket.id);

    const SocketID=EmailToSocketMapping.get(emailId);

    socket.to(SocketID).emit('Incoming-call',{from:fromWho,offer})

  })

  socket.on("Call-Accepted",(data)=>{
   const {emailId , answer}=data;

   const socketid=EmailToSocketMapping.get(emailId);

   socket.to(socketid).emit('Call-Accepted',{answer});


  })



  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  
});

app.listen(port, () => {
  console.log("App is Running Successfully On" + port);
})

io.listen(8001, () => {
  console.log("IO server is on");
})
