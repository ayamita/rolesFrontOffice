var express = require('express');
var router = express.Router();
var db=require("../config/conexion");

/* GET home page. */
router.get('/', function(req, res) {  
    res.render('sinPermiso');
});

module.exports = router;
