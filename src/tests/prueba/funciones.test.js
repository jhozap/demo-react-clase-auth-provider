import { getUser } from "../../prueba/funciones";

describe('Prueba 1', () => {

    test('getUser, debe retornar un objeto', () => {

        const user = getUser();

        const userTest = {
            uid: '123ASD123',
            user: 'jzapata'
        };

        expect(user).toEqual(userTest);
    })


});