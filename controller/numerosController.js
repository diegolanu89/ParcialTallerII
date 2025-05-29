import  NumerosService  from '../services/numerosServices.js';

class NumerosController {
  constructor(persistencia) {
    this.service = new NumerosService(persistencia);

    this.ingresar = this.ingresar.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.getPromedio = this.getPromedio.bind(this);
    this.getMinMax = this.getMinMax.bind(this);
    this.getCantidad = this.getCantidad.bind(this);
  }

  async ingresar(req, res) {
    const { numero } = req.body;
    await this.service.agregar(numero);
    res.status(201).json({ mensaje: 'Número guardado' });
  }

  async getTodos(req, res) {
    const numeros = await this.service.listar();
    res.json({ numeros });
  }

  async getPromedio(req, res) {
    const promedio = await this.service.promedio();
    res.json({ promedio });
  }

  async getMinMax(req, res) {
    const resultado = await this.service.minmax();
    res.json(resultado);
  }

  async getCantidad(req, res) {
    const cantidad = await this.service.cantidad();
    res.json({ cantidad });
  }
}

export default NumerosController
