//import library
const express = require("express");
const bodyParser = require("body-parser");

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import multer
const multer = require("multer");
const path = require("path");
const fs = require("fs");

//import model
const models = require("../models/index");
const req = require("express/lib/request");
const res = require("express/lib/response");
const petugas = models.petugas;

//config storage image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image/petugas");
  },
  filename: (req, file, cb) => {
    cb(null, "img-" + Date.now() + path.extname(file.originalname));
  },
});
let upload = multer({ storage: storage });

//menampilkan semua data petugas
app.get("/", (req, res) => {
  petugas
    .findAll()
    .then((result) => {
      res.json({
        petugas: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//menampilkan data petugas berdasarkan id
app.get("/:idpetugas", (req, res) => {
  petugas
    .findOne({ where: { idpetugas: req.params.idpetugas } })
    .then((result) => {
      res.json({
        petugas: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//menambahkan data petugas baru
app.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.json({
      message: "No uploaded file",
    });
  } else {
    let data = {
      nik: req.body.nik,
      namapetugas: req.body.namapetugas,
      alamat: req.body.alamat,
      telp: req.body.telp,
      image: req.file.filename,
    };
    petugas
      .create(data)
      .then((result) => {
        res.json({
          // message: "data has been inserted"
          petugas: result,
        });
      })
      .catch((error) => {
        res.json({
          message: error.message,
        });
      });
  }
});

//mengubah data petugas berdasarkan id
app.put("/:id", upload.single("image"), (req, res) => {
  let param = { idpetugas: req.params.id };
  let data = {
    nik: req.body.nik,
    namapetugas: req.body.namapetugas,
    alamat: req.body.alamat,
    telp: req.body.telp,
    image: req.file.filename,
  };
  if (req.file) {
    // get data by id
    const row = petugas
      .findOne({ where: param })
      .then((result) => {
        let oldFileName = result.image;

        // delete old file
        let dir = path.join(__dirname, "../image/petugas", oldFileName);
        fs.unlink(dir, (err) => console.log(err));
      })
      .catch((error) => {
        console.log(error.message);
      });

    // set new filename
    data.image = req.file.filename;
  }

  petugas
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

//menghapus data petugas berdasarkan id
app.delete("/:id", async (req, res) => {
  try {
    let param = { idpetugas: req.params.id };
    let result = await petugas.findOne({ where: param });
    let oldFileName = result.image;

    // delete old file
    let dir = path.join(__dirname, "../image/petugas", oldFileName);
    fs.unlink(dir, (err) => console.log(err));

    // delete data
    petugas
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
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = app;
