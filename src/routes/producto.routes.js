import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

const router = Router();

// crear las rutas
//router.route('/').post( agregar logica al controlador)
router
  .route("/")
  .get(cafeteriaCtrl.listarProductor)
  .post(cafeteriaCtrl.crearProducto);

router
  .route("/:idProd")
  .delete(cafeteriaCtrl.eliminarProducto)
  .put(cafeteriaCtrl.editarProducto)
  .get(cafeteriaCtrl.obtenerProducto);

export default router;
