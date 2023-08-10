const jsonserver = require("json-server")

const cors = require("cors")
const path =  require("path")
const server = jsonserver.create()
const router = jsonserver.router("db.json")

const middleware = jsonserver.defaults();

server.use(cors())
server.use(middleware)
server.use(router);
server.use(jsonserver.bodyParser);

let port = 8000;

server.listen(port,()=> {
    console.log(`Server is runnnig on ${port}`)
})

