// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
//
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe2';
} else {
    urlDB = 'mongodb+srv://Drake:Yzu7NeemkKQKdqyN@cluster0-yjv67.mongodb.net/cafe2?retryWrites=true';
}
process.env.URLDB = urlDB;