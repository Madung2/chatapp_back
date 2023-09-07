import express, { Request, Response, Application } from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';
import sequelize from './configs/database';
import Message from './models/Message';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../../.env' });

const app: Application = express();

app.use(cors({
    origin: "*",
}));

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        return sequelize.sync(); // Synchronize models with database (optional)
    })
    .then(() => {
        console.log('DB Sync complete.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



app.get('/', (req: Request, res: Response) => {
    res.send(`Hello This is Server`);
    console.log('Hello This is Server');
});

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('send', (msg) => {
        console.log('WORKING!!!!!', msg);
        io.emit('receive', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
