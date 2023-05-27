import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const pool = mysql.createPool({
    host:`${process.env.DB_HOST}`,
    user:`${process.env.DB_USER}`,
    port:`${process.env.DB_PORT}`,
    password:`${process.env.DB_PASS}`,
    database:`${process.env.DB_NAME}`
});

export default pool;