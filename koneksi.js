let mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'absen'
})

conn.connect((err) => {
    if (err) throw err
    console.log('Mysql terkoneksi')
})

module.exports = conn