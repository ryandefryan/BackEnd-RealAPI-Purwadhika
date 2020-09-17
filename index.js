// ############### IMPORT & EXPORT NODE JS ###############
// Import Menggunakan "require".
// Export Menggunakan "module.export".

// var tryImport = require('./functionExport.js')

// console.log(tryImport(5, 10))



// // ############### MODULE BUILD IN LIBRARY ###############
// // 1. Crypto (Encrypt & Decrypt) ---> Untuk Meng-Enkripsi dan Meng-Deskripsi Data
//       const Crypto = require('crypto')
// //    - Encrypt
//         const password = 'ryan2012'
//         var mykey = Crypto.createCipher('aes-128-cbc', 'secretkey')
//         var mystr = mykey.update(password, 'utf8', 'hex')
//         mystr += mykey.final('hex')
//         console.log(mystr)

// //    - Decrypt
//         var mykey = Crypto.createDecipher('aes-128-cbc', 'secretkey')
//         var mystr = mykey.update('fbd0f4f12edaebcbac25837fe5e99b21', 'hex', 'utf8')
//         mystr += mykey.final('utf8')
//         console.log(mystr)

// // 2. OS ---> Untuk Melihat Spesifikasi Komputer User
//       const os = require('os')
      
//         console.log(os.cpus())
//         console.log(os.platform())



// ############### NPM MODULE ###############
// Ex.
//      1. Express
//      2. React
//      3. MySql
//      4. Moment
//      5. Axios
//      6. Reactstrap
//      7. React-Router



// ############### CREATE REAL API ###############
// Steps.
//          1. Install Nodemon Agar Langsung Re-Running ---> sudo npm install -g nodemon


// Route Sama Seperti Function yang Memiliki Nama, dan di Dalamnya Terdapat Block Code yang 
// Baru Bisa Muncul Ketika Dijalankan.

// Terdapat Res dan Req
//      Res ---> Kirim dari Back-End
//      Req ---> Menerima dari Front-End

const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    user : 'root',
    password : '20121995',
    database : 'titanic',
    port : 3306
})

const PORT = 2000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/show-passengers', (req, res) => {
    connection.query('SELECT * FROM passengers;', (err, result) => {
        if(err) throw res.send(err.message)
        res.send(result)
    })
})

app.get('/show-passengers-male', (req, res) => {
    connection.query('SELECT * FROM passengers where Sex = "male";', (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

app.listen(PORT, () => console.log('API Running on PORT ' + PORT ))

