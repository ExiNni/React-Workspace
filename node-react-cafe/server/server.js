const oracledb = require('oracledb');
const express = require('express');

const app = express();


const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT = 5003;

const dbConfig = {
    user: 'khbank',
    password: '1234',
    connectString: 'localhost:1521/XE',
};


async function runQuery(sql, binds = [], options = {}) {
    let connection;
    try{
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(sql, binds, options);
        return result.rows.map((row) => ({
            CAFE_ID: row[0],
            LOCATION: row[1],
            NAME: row[2],
            OPERATION_HOUR: [3],

        }));
    } catch (err){
        console.error(err);
    } finally {
        if(connection) {
            try{
                await connection.close();
            } catch(err){
                close.error(err);
            }
        }
        
    }
}



app.get('/', (request, response) => {
    response.send('벡엔드 연결 성공');
});

app.get('/api/cafes', async (request, response) => {
    const todos = await runQuery('SELECT * FROM cafe');
    response.json(todos);
})


app.listen(PORT, () => {
    console.log(`서버 시작: http://localhost:${PORT}`);
})