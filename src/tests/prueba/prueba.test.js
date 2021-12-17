import { saludo } from "../../prueba/prueba";

describe('Prueba 1', () => {

    test('saludo, esto deberia devolver Hola Jhonny', () => {

        const nombre = 'Jhonny';

        const result = saludo(nombre);

        expect(result).toBe('Hola ' + nombre);

    })


    test('saludo, esto deberia devolver Hola Ana si no envio argumentos a la funcion', () => {

        const result = saludo();
        expect(result).toBe('Hola Ana');
        
    })


});