var express = require('express');
var router = express.Router();
var db=require("../config/conexion");

router.get('/', function(req, res, next) {
    res.render('login');
  });

router.post('/', function(req, res, next) {
  const { usuario, contraseña } = req.body;
  const datos = {
    usuario,
    contraseña,
  }
  if (usuario && contraseña) {
      db.query('SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ? and superusuario = 0 ', [datos.usuario, datos.contraseña], function(err,resultados){                 
          if(resultados.length > 0){      
              const superusuario = resultados[0].idusuario;         
              req.session.idusuario = superusuario;
              res.redirect('/inicio');
          }else{
              res.send('El correo o contraseña es incorrecto');
          }
          res.end();          
          console.log(resultados);
      });
      }else{
      res.send('Favor de ingresar correo y contraseña');
      res.end();
  }
});
  
module.exports = router;