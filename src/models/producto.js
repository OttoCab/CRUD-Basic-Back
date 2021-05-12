import mongoose, { Schema } from "mongoose";

// Esto es como un tabla en SQL y parecido a un objeto y se llama "documento"
// y se guardan en lo que se llama "la coleccion"
// nosotros modelamos una estructura del documento
const productoSchema = new Schema({
  nombreProducto: {
      type: String,
      maxlength: 150,
      required: true,
      unique: true
  },
  precioProducto: {
      type: Number,
      maxlength: 6,
      requerid: true,
  },
  categoria: {
      type: String,
      requerid: true
  },
});

const Producto = mongoose.model('producto', productoSchema)

export default Producto;
