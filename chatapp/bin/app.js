"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http")); // node.js의 기본 모듈, http 서버와 클라이언트 기능 제공, socket.io를 연결하기 위해 필요
const cors_1 = __importDefault(require("cors"));
// express 서버에 socket.io를 연결하기 위해 http 서버를 생성 : 소켓 단자를 추가하는 작업
// 이를 통해 기존의 웹 요청 라우팅과 socket.io를 통한 실시간 통신을 동시에 사용할 수 있음
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3001", // 모든 도메인에서의 접근을 허용
}));
const server = http_1.default.createServer(app); // express 서버를 http 서버로 감싸줌 = express 서버에 소켓단자 추가
const PORT = 3000;
app.get('/', (req, res) => {
    res.send(`Hello This is Front`);
    console.log('Hello This is Front');
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"],
        credentials: true
    }
}); // 기존 서버에 socket.io를 연결 = 소켓 연결
// socket.io = 소켓이란 두 컴퓨터가 네트워크를 통해 실시간으로 데이터를 주고받을 수 있도록 만든 양쪽 끝단의 인터페이스
// io = 전화교환대, socket = 전화기
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('send', (msg) => {
        console.log('WORKING!!!!!', msg);
        io.emit('receive', msg); // io.emit = 연결된 모든 클라이언트에게 메시지 전송
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(PORT, () => {
    console.log(`This server is running in http://localhost:${PORT}`);
});
