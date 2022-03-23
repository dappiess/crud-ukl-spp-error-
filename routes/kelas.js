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
const kelas = model.kelas;

//endpoint menampilkan semua data kelas, method: GET, function: findAll()
app.get("/", (req, res) => {
  kelas
    .findAll()
    .then((result) => {
      res.json({
        kelas: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.get("/:kelas", (req, res) => {
  kelas
    .findOne({ where: { kelas: req.params.id_kelas } })
    .then((result) => {
      res.json({
        kelas: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//endpoint untuk menyimpan data kelas, METHOD: POST, function: create
app.post("/", (req, res) => {
  let data = {
    idpetugas: req.body.idpetugas,
  };

  kelas
    .create(data)
    .then((result) => {
      res.json({
        message: "data has been inserted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//endpoint mengupdate data admin, METHOD: PUT, function:update
app.put("/:id", (req, res) => {
  let param = {
    id_kelas: req.params.id,
  };
  let data = {
    idpetugas: req.body.idpetugas,
  };
  kelas
    .update(data, { where: param })
    .then((result) => {
      res.json({
        message: "data has been updated",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//endpoint menghapus data kelas, METHOD: DELETE, function: destroy
app.delete("/:id", (req, res) => {
  let param = {
    id_kelas: req.params.id,
  };
  kelas
    .destroy({ where: param })
    .then((result) => {
      res.json({
        message: "data has been deleted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

module.exports = app;