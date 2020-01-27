const express = require('express');
const app = express();

// Inicializaciones
require('./database/connect');

// Configuraciones
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Rutas
app.use('/users', require('./routes/user'));
app.use('/exercises', require('./routes/exercise'));

// Server
app.listen(app.get('port'), () =>{
    console.log('Server en el puerto:', app.get('port'));
});



