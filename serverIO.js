// autoUpdater.checkForUpdates();
const http = require('http');
const io = require('socket.io');

const server = http.createServer((req, res) => {
    // Lógica del servidor HTTP aquí (si es necesario)
});

const socketServer = io(server);

server.listen(3000, () => {
    console.log('Servidor Socket.IO escuchando en el puerto 3000');
});

socketServer.on('connection', (socket) => {
    console.log('Un cliente se ha conectado.');
    console.log(socket.id);

    // Asignacion de SocketID al Dispositivo
    socketServer.to(socket.id).emit('IDAssigned', socket.id);

    // Evento de tiempo real VIPPP
    socket.on('vippp_real_time', (data) => {
        console.log(data);
        // SaveData() Aqui se podria mandar a guardar el tiempo real.
    });
})