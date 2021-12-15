import { gql } from '@apollo/client'

const GET_USUARIO_BY_ID = gql`
    query UserById($id: ID!){
        usuarioById(id: $id) {
            id
            nombre
            apellido
            email
            password
        }
    }
`;

export default GET_USUARIO_BY_ID;