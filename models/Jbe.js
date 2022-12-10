const mongoose = require('mongoose')



const JbeSchema = mongoose.Schema({
    nama_Barang:{
        type: String,
        require: true
    },
    harga_Barang:{
        type: String,
        require: true
    },
    brand_Barang:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Jbe',JbeSchema )