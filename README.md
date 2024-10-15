# Ejemplo SocketIO Server

Este ejemplo es unicamente de demostración de como es que se comporta el SocketIO para el dispositivo VIPPP.

Aqui unicamente se mostrara a travez de la consola el mensaje del tiempo real que manda el dispositivo. Para la prueba de manera local se requiere de lo siguiente:

# Requerimientos

1. Que se tenga configurada la electronica en una red Wifi.
2. Una computadora tambien conectada a la misma LAN de la electronica. (Este es el servidor socket).
3. Conocer la direccion IP de la computadora servidor para hacerla prueba LOCAL


# Instalacion de Servidor de Ejemplo

```
npm i
node .\serverIO.js
```
# Funcionamiento de ejemplo

La electronica en el apartado de server hay que configurar la IP, en este caso sera la IP de la computadora local para realizar la prueba. Esta IP despues se puede cambiar a una IP publica y tiene el mismo funcionamiento.

Este servicio escucha en el puerto 3000 por lo que es importante que nada obstruya ese puerto de la computadora para este ejemplo.

La electronica se conectara inmediatamente ofreciendo un mensaje de nuevo dispositivo conectado, adicionalmente se mostrara el SocketID que se le asigna a la tarjeta electronica.

Pasando unos segundos, se podra ver el mensaje de tiempo real emitido por la electronica y la primer variable que podran ver en el JSON de datos es el socketId que se le asigna, con eso hay que contestar siempre los mensajes.