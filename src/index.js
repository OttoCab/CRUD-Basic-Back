import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './datebase'
import productoRoutes from './routes/producto.routes'

//config
//creo una instancia de express
const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("estoy en el puerto " + app.get("port"));
  //console.log(path.join(__dirname, '../public'));
});

// herramientas extras middlewares (pequeñas funcionalidades)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

// rutas
// app.get('/', (req, res)=>{
//   res.send('esta es una ruta de prueba');
// })
app.use('/api/cafeteria', productoRoutes);

// localhost:4000/api/cafeteria