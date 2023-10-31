package com.springsimples.univesidad.universidadbackend.servicios.contratos;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;

public interface ProfesorDao extends PersonaDao {

    Iterable<Persona> findProfesoresByCarrera(String carrera);
}
