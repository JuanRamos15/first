// 1. Importando el modulo de Node
// http
import http from 'http';

// 2. Crear el servidor
 //
const server = http.createServer( (req, res)=>{
    // Toda la logica del server
    // 1. Respondiendo al cliente
    res.write("Hello from the server... ");
    // 2. Cerrar la conexion
    res.end();
} );

// 3. Arrancamos el servidor
server.listen(3000,"0.0.0.0",()=>{
    console.log("💘 Servidor escuchando en http://localhost:3000");
});