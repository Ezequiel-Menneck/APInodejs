// const postgres = require('postgres');
const { Client } = require('pg')

// const sql = postgres('postgres://postgres:123456@localhost:5432/ecommerce', {
//     host: process.env.HOST,
//     porta: process.env.PORT,
//     bd: process.env.BD,
//     usuario: process.env.USER,
//     password: process.env.PASS
// })

// exports.sql = sql;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: "ecommerce",
    password: '123456',
    port: 5432
})
client.connect();

exports.client = client;
