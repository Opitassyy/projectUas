const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// post data
router.post("/", async (req, res) => {
  const serPost = new Service({
    nama: req.body.nama,
    nama_Barang: req.body.nama_Barang,
    kerusakan: req.body.kerusakan,
    tanggalMasuk: req.body.tanggalMasuk,
    tanggalKeluar: req.body.tanggalKeluar,
    hargaService: req.body.hargaService,
  });
  try {
    const service = await serPost.save();
    res.json(service);
  } catch (error) {
    res.json({ message: error });
  }
});

// get data
router.get("/", async (req, res) => {
  try {
    const service = await Service.find();
    res.json(service);
  } catch (error) {
    res.json({ message: error });
  }
});

// update data
router.put("/:serviceId", async (req, res) => {
  const data = {
    nama: req.body.nama,
    nama_Barang: req.body.nama_Barang,
    kerusakan: req.body.kerusakan,
    tanggalMasuk: req.body.tanggalMasuk,
    tanggalKeluar: req.body.tanggalKeluar,
    hargaService: req.body.hargaService,
  };

  try {
    // put data
    const service = await Service.updateOne(
      {
        _id: req.params.serviceId,
      },
      data
    );
    res.json(service);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete data
router.delete("/:serviceId", async (req, res) => {
  try {
    const service = await Service.deleteOne({
      _id: req.params.serviceId,
    });
    res.json(service);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
