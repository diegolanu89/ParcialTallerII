export class NumerosMem {
  
    constructor() {
      this.Numeros = [];
      this.id = 0;
    }
  
    async obtenerTodos() {
      return this.Numeros;
    }
  
    async obtenerPorId(id) {
      return this.Numeros.find(u => u.id === parseInt(id));
    }
  
    async guardar(valor) {
      const numero = {
        id: ++this.id,
        valor
      };
      this.Numeros.push(numero);
    }
  
    async actualizar(id, datos) {
      const index = this.Numeros.findIndex(u => u.id === parseInt(id));
      if (index === -1) return null;
      this.Numeros[index] = { ...this.Numeros[index], ...datos };
      return this.Numeros[index];
    }
  
    async eliminar(id) {
      this.Numeros = this.Numeros.filter(u => u.id !== parseInt(id));
    }
  }
  