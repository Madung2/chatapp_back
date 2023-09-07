import { createConnection, Connection } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../../.env' });
console.log(process.env.DB_HOST);

import { Sequelize } from 'sequelize';
import MessageModel from '../models/Message';


const db_config = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    dialect: process.env.DB_DIALECT as any,
    logging: false, // 쿼리문 출력 여부 (true: 출력, false: 미출력)
  };
  
const sequelize = new Sequelize(db_config);
const Message = MessageModel(sequelize, Sequelize);
export { sequelize, Message }