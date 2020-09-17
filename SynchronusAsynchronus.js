// Synchronus ---> Step-Step Dijalankan Secara Berurutan. Menunggu Setiap Code Selesai, Baru Menjalankan Code Selanjutnya.

for(var i = 0; i < 10; i++){
    console.log('Hello')
}

console.log('World!')

// Asynchronus ---> Step-Step Dijalankan Secara Berurutan. TETAPI TIDAK MENUNGGU Setiap Code Selesai. 
//                  Setiap Code Dijalankan, Selesai ataupun Tidak Maka Akan Lanjut Menjalankan Code Selanjutnya.

setTimeout(() => {console.log('Hello')}, 1000)
console.log('World!')