package com.springsimples.univesidad.universidadbackend.servicios.contratos;


import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;

public interface AlumnoDao extends PersonaDao {
    // van a ser las mismas para empleado y profesor

    Iterable<Persona> buscarAlumnosPorNombreCarrera(String nombre);
}
