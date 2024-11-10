// Fungsi untuk menghasilkan kata acak
function generateRandomWord(length = 5) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let word = '';
    for (let i = 0; i < length; i++) {
        word += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return word;
}

// Fungsi untuk menghasilkan token dengan 20 kata acak
function generateToken() {
    const tokenLength = 20; // Jumlah kata dalam token
    const token = [];
    
    for (let i = 0; i < tokenLength; i++) {
        token.push(generateRandomWord()); // Menambahkan kata acak ke array token
    }
    
    return token.join(''); // Gabungkan kata tanpa tanda hubung
}

// Contoh penggunaan
console.log(generateToken());
