import ModelFactory from '../models/numerosFactory.js';

class NumerosService {
  constructor(persistencia) {
    this.persistencia = ModelFactory.get(persistencia);
  }

  async agregar(valor) {
    await this.persistencia.guardar(valor);
  }

  async listar() {
    return await this.persistencia.obtenerTodos();
  }

  async promedio() {
    const lista = await this.listar();
    console.log(lista);
    const suma = lista.reduce((acc, val) => acc + val.valor, 0);
    return lista.length ? suma / lista.length : 0;
  }

  async minmax() {
      const lista = await this.listar();
      const valores = lista.map(n => n.valor);
    
      return {
        min: Math.min(...valores),
        max: Math.max(...valores)
      };
    
  }

  async cantidad() {
    const lista = await this.listar();
    return lista.length;
  }
}
export default NumerosService