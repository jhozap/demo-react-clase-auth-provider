import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/container/Navbar'
import ProyectosPage from '../components/proyectos/ProyectosPage'
import UsuarioPage from '../components/usuarios/UsuarioPage'

const ContentRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/usuarios/:action" element={ <UsuarioPage /> }/>
                <Route path="/usuarios" element={ <UsuarioPage /> }/>
                <Route path="/proyectos" element={ <ProyectosPage /> }/>

                <Route path="/" element={ <UsuarioPage /> }/>
            </Routes>   
        </>
    )
}

export default ContentRoutes
