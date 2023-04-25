// 1. Importando el modulo de Node
// http
import http from 'http';
//bibloteca path
import path from 'path';

//recreando Built-in variables
global["_dirname"]=path.dirname(new URL(import.meta.url).pathname);
global["_dirname"]=path.join(_dirname,path.basename(new URL(import.meta.url).pathname));
// 2. Crear el servidor
const server = http.createServer( (req, res)=>{
    // Toda la logica del server
    // 1. Respondiendo al cliente
    res.write("Revisa la consola server ");
    // 2. Cerrar la conexion
    console.log(`client .request: ${req.method}${req.url}`);
    res.end();
} );

// 3. Arrancamos el servidor
server.listen(3000,"0.0.0.0",()=>{
    console.log("💘 Servidor escuchando en http://localhost:3000");
});