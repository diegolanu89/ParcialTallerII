import express from 'express';
import NumerosController from '../controller/numerosController.js';

export default class RouterNumeros {
  constructor(persistencia) {
    this.controller = new NumerosController(persistencia)
    this.router = express.Router();
  }

  start() {
    this.router.post('/entrada', this.controller.ingresar);
    this.router.get('/entrada', this.controller.getTodos);
    this.router.get('/promedio', this.controller.getPromedio);
    this.router.get('/minmax', this.controller.getMinMax);
    this.router.get('/cantidad', this.controller.getCantidad);
    return this.router;
  }
}
