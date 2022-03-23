//import
const express = require("express");
const cors = require("cors");

//implementasi
const app = express();
app.use(cors());

//endpoint siswa
const admin = require("./routes/siswa");
app.use("/siswa", siswa);

//endpoint admin
const admin = require("./routes/admin");
app.use("/admin", admin);

//endpoint kelas
const kelas = require("./routes/kelas");
app.use("/kelas", kelas);

//endpoint petugas
const petugas = require("./routes/petugas");
app.use("/petugas", petugas);

//endpoint pembayaran
const pembayaran = require("./routes/pembayaran");
app.use("/pembayaran", pembayaran);

//run server
app.listen(8080, () => {
  console.log("server run on port 8080");
});
