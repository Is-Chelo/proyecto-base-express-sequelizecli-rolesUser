const express = require("express");
const router = express.Router();
const { validarToken, validarPermisos } = require("../middlewares/auth");
// * AUTH
router.use("/auth", require("./auth"));

// EXAMPLE
router.use("/profesores", [validarToken, validarPermisos], (req, res) => {
  res.send("hola");
});

module.exports = router;
