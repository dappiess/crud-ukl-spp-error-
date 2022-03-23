//import library
const express = require("express");
const bodyParser = require("body-parser");

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import model
const model = require("../models/index");
const req = require("express/lib/request");
const res = require("express/lib/response");
const siswa = model.siswa;

//endpoint menampilkan semua data siswa, method: GET, function: findAll()
app.get("/", (req,res) => {
    siswa.findAll()
        .then(result => {
            res.json({
                siswa : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.get("/:idsiswa", (req,res) => {
    siswa
    .findOne ({ where: {idsiswa: req.params.idsiswa}})
    .then((result) => {
        res.json({
           siswa: result, 
        })
    })
    .catch((error) => {
        res.json({
           message: error.message
        })
    })
})

//endpoint untuk menyimpan data siswa, METHOD: POST, function: create
app.post("/", (req,res) => {
    let data = {
      nis: req.body.nis,
      namasiswa: req.body.namasiswa,
      kelas: req.body.kelas,
      tahunajaran: req.body.tahunajaran,
      biaya: req.body.biaya,
    };

    siswa.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint mengupdate data siswa, METHOD: PUT, function:update
app.put("/:id", (req,res) => {
    let param = {
        idsiswa : req.params.id
    }
    let data = {
      nis: req.body.nis,
      namasiswa: req.body.namasiswa,
      kelas: req.body.kelas,
      tahunajaran: req.body.tahunajaran,
      biaya: req.body.biaya,
    };
    siswa.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint menghapus data siswa, METHOD: DELETE, function: destroy
app.delete("/:id", (req,res) => {
    let param = {
        idsiswa : req.params.id
    }
    siswa.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

module.exports = app;