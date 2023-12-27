const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = 5001;

const cors = require('cors');

app.use(cors());

const dbConfig = {
user: 'khbank',
password: '1234',
connectString: 'localhost:1521/XE',
};

app.use(express.json());

async function runQuery(sql, binds = [], options = {}) {
let connection;

try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql, binds, options);

    return result.rows.map((row) => ({
    ID: row[0],
    TASK: row[1],
    }));
} catch (err) {
    console.error(err);
} finally {
    if (connection) {
    try {
        await connection.close();
    } catch (err) {
        console.error(err);
    }
    }
}
}

async function cafeQuery(sql, binds = [], options = {}) {
let connection;

try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql, binds, options);

    return result.rows.map((row) => ({
    ID: row[0],
    Location: row[1],
    Name: row[2],
    }));
} catch (err) {
    console.error(err);
} finally {
    if (connection) {
    try {
        await connection.close();
    } catch (err) {
        console.error(err);
    }
    }
}
}

app.get('/', (request, response) => {
response.send('백엔드 연결 성공!');
});

app.get('/api/cafe', async (request, response) => {
  const cafe = await cafeQuery('SELECT * FROM cafe');
response.json(cafe);
});

app.listen(PORT, () => {
console.log(`서버 시작 :  http://localhost:${PORT}`);
});