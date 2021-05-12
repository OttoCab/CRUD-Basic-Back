import Producto from '../models/producto'
const cafeteriaCtrl={};

cafeteriaCtrl.getPrueba = (req, res) => {
    res.send('prueba desde el controlador')
};

cafeteriaCtrl.crearProducto =async (req, res) =>{
    // console.log(req);
    // console.log(req.body);
    try {
        // crear un objeto que posteriormente guarado en la BD
        const nuevoProducto = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        })
        // guardar en la BD
        await nuevoProducto.save();
        res.status(201).json({
            mensaje: 'Se agrego un nuevo producto'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'error al agregar un producto'
        });
    }
}

export default cafeteriaCtrl;