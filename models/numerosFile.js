import fs from 'fs'

export class NumerosFile {

  #archivo

  constructor() {
    this.#archivo = '/NumerosData.json';
  }

  async leerArchivo() {
    try {
      const contenido = await fs.readFile(this.ruta, 'utf-8');
      return JSON.parse(contenido);
    } catch {
      return [];
    }
  }

  async escribirArchivo(data) {
    await fs.writeFile(this.ruta, JSON.stringify(data, null, 2));
  }

  async guardar(numero) {
    const data = await this.leerArchivo();
    data.push(numero);
    await this.escribirArchivo(data);
  }

  async obtenerTodos() {
    return await this.leerArchivo();
  }
}
