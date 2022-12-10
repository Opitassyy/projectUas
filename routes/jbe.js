const express = require('express')
const router = express.Router()
const Jbe = require('../models/Jbe')

router.post('/', async(req, res) =>{
    // penampungan input data
    const jbePost = new Jbe({
        nama_Barang: req.body.nama_Barang,
        harga_Barang: req.body.harga_Barang,
        brand_Barang: req.body.brand_Barang
    })
    try{
        // save ke mongooDb
        const jbe = await jbePost.save()
        res.json(jbe)
    } catch(error){
        res.status(500).json({message: error})
    }
})

router.get('/', async (req, res)=>{
    try{
        const jbe = await Jbe.find()
        res.json(jbe)
    } catch(error){
        res.json({message:error})
    }
})
router.put('/:jbeId', async (req, res)=>{
    // ambil data yg mau diubah 
    const data = {
        nama_Barang: req.body.nama_Barang,
        harga_Barang: req.body.harga_Barang,
        brand_Barang: req.body.brand_Barang
    }
    try{
        const jbe = await Jbe.updateOne({_id:req.params.jbeId}, data)
        res.json(jbe)
    }catch(error){
        res.json({message: error})
    }
})

router.delete('/:jbeId', async (req, res) => {
    try{
        const jbe = await Jbe.deleteOne({_id: req.params.jbeId})
        res.json(jbe)
    }catch(error){
        res.json({message: error})
    }
})

module.exports = router