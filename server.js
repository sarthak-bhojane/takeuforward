const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'mdjt55'
})

app.get('/', (re, res) =>{
    return res.json("From Backend Side");
})

app.get('/submissions', (req, res) =>{
    const sql = "SELECT * FROM submissions";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(3308, ()=>{
    console.log("listening");
})


// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// const db = mysql.createPool({
//     connectionLimit: 10, // Adjust according to your requirements
//     host: "localhost",
//     user: 'root',
//     password: '',
//     database: 'mdjt55'
// });

// db.getConnection((err, connection) => {
//     if (err) {
//         console.error('Error connecting to MySQL database:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
//     connection.release(); // Release the connection
// });

// app.get('/', (req, res) =>{
//     return res.json("From Backend Side");
// });

// app.get('/submissions', (req, res) =>{
//     const sql = "SELECT * FROM submissions";
//     db.query(sql, (err, data) => {
//         if (err) {
//             console.error('Error fetching submissions:', err);
//             return res.json(err);
//         }
//         return res.json(data);
//     });
// });

// const PORT = process.env.PORT || 3308;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
