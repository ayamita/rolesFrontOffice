var express = require('express');
var router = express.Router();
var db=require("../config/conexion");

/* GET home page. */
router.get('/', function(req, res) {  
  console.log("Hola bb " + req.session.idusuario);
  var id = req.session.idusuario;
  db.query("SELECT usuarios.idusuario, permisos.idpermiso, permisosusuario.estatys, usuarios.nombre, usuarios.usuario, usuarios.contraseña, usuarios.superusuario, permisos.nombre as nombre_permiso, permisos.ruta " +
    "FROM permisosusuario "+
    "INNER JOIN usuarios ON permisosusuario.idusuario = usuarios.idusuario " +
    "INNER JOIN permisos ON permisosusuario.idpermiso = permisos.idpermiso " +
    "where usuarios.idusuario =? and permisosusuario.estatys != '' order by idpermiso asc", id,  function(err,resultados){
    console.log(resultados);
  
    if(resultados.length > 0){
      console.log(resultados);
      res.render('inicio', {permisos:resultados});
    }else{
      console.log('Chale man no hay');
      res.render('sinPermiso');
    }    
  });
});

module.exports = router;
