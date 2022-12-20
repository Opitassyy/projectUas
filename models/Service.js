const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
  nama_Barang: {
    type: String,
    require: true,
  },
  kerusakan: {
    type: String,
    require: true,
  },
  tanggalMasuk: {
    type: String,
    require: true,
  },
  tanggalKeluar: {
    type: String,
    require: true,
  },
  hargaService: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("service", serviceSchema);
