import { createConnection, Connection } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../../.env' });
console.log(process.env.DB_HOST);

import { Sequelize } from 'sequelize';

// const db = async (): Promise<Connection> => {
//     try {
//         const connection = await createConnection({
//             type: "postgres",
//             host: process.env.DB_HOST,
//             port: Number(process.env.DB_PORT),
//             username: process.env.DB_USERNAME,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//             synchronize: true, // 이 옵션은 개발 중에만 사용하도록 하세요. 프로덕션에서는 마이그레이션을 사용하세요.
//             logging: false,
//             entities: [
//                 // 여기에 모델/엔터티를 추가하세요.
//             ],
//         });

//         console.log("Database connection established successfully");
//         return connection;
//     } catch (error) {
//         console.error("Error connecting to the database", error);
//         throw error;
//     }
// };



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
export default sequelize;