var express = require('express')

var app = express()

var server = require('http').createServer(app)

var io = require('socket.io')(server)


app.use(express.static('client'))

var messages = [
    {
        id: 1,
        text: 'Bienvenido al chat',
        author: 'Bot - Nelson',
        date: new Date().toLocaleString()
    },
    {
        id: 2,
        text: 'Escribe tu nombre',
        author: 'Bot - Nelson',
        date: new Date().toLocaleString()
    }
    
]

io.on('connection', (socket) => {
    console.log('a user connected IP: ' + socket.handshake.address)
    socket.emit('messages', messages)

    // Recibir un nuevo mensaje
    socket.on('add-message', (data) => {
        // guardar el mensaje de forma temporal
        messages.push(data)
        
        // Emitir el mensaje a todos los usuarios
        io.sockets.emit('messages', messages)
    })
})



server.listen(3800, () => {
    console.log('Server listening on port 3800')
    console.log('http://localhost:3800')
})



