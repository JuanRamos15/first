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
    res.setHeader('Content.Type','text/html');
    // Toda la logica del server
    ///loggear
    console.log(`client .request: ${req.method}${req.url}`);
    // 1. Respondiendo al cliente
    res.write("<html>");
    res.write("<head>");
    res.write("<title>My App</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Hello from my server...</h1>");
    res.write("</body>");
    res.write("</html>");
    // 2. Cerrar la conexion
    ///loggear
    console.log(`contestando: ${req.method}${req.url}`);
    //cerrando la conexion
    console.log("Cerrando conexion");
    res.end();
} );

// 3. Arrancamos el servidor
server.listen(3000,"0.0.0.0",()=>{
    console.log("💘 Servidor escuchando en http://localhost:3000");
});