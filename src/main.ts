import { StupeServer} from "./bootstrap"
const PORT = 3701;
const server = new StupeServer(PORT)
server.init()
server.start();