import { NumerosMem } from "./numerosMem.js"
import { NumerosFile } from './numerosFile.js';


class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('<<< Persistiendo en Memoria >>>')
                return new NumerosMem()

            case 'FILE':
                console.log('<<<  Persistiendo en FS >>>')
                return new NumerosFile()

            default:
                console.log('<<<  Persistiendo en Default (Memoria) >>>')
                return new NumerosMem()
        }
    }
}

export default ModelFactory