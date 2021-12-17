import { retornarArreglo } from "../../prueba/arreglos";

describe('Prueba arreglos', () => {

    test('retornarArreglo, debe retornar un arreglo', () => {

        const arr = retornarArreglo();

        const userTest = ['Jhonny', 26];

        const [ nombre, edad ] = retornarArreglo();

        expect(arr).toEqual(userTest);

        expect(nombre).toBe('Jhonny');
        expect(edad).toBe(26);
    })


});