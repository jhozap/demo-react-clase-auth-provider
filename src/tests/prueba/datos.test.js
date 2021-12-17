import estudiantes from "../../data/ejemplo";
import { getEstudianteById } from "../../prueba/datos";

describe('Prueba con datos', () => {

    test('getEstudianteById, debe retornar un estudiante por el id', () => {

        const id = 2;

        const estudiante = getEstudianteById(id);
        console.log(estudiante)

        const test = estudiantes.find(estudiante => estudiante.id === id);

        expect(estudiante).toEqual(test);
        
    })

});