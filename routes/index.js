var express = require('express');
var router = express.Router();
var db=require("../config/conexion");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  db.query("SELECT usuarios.idusuario, usuarios.nombre, usuarios.usuario, usuarios.contraseña, permisosusuario.idpermiso, permisosusuario.estatys FROM usuarios " + 
    "INNER JOIN permisosusuario on usuarios.idusuario = permisosusuario.idusuario", function(err,resultados){
    //console.log(resultados);
    res.render('index', { title: 'Videogames'});
  });
});

module.exports = router;
