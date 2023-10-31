package com.springsimples.univesidad.universidadbackend.servicios.contratos;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;

import java.util.Optional;

public interface PersonaDao extends GenericoDao<Persona> {

    Optional<Persona> buscarPorNombreYApellido(String nombre, String apellido);

    Optional<Persona> buscarPorDni(String dni);

    Iterable<Persona> buscarPersonaPorApellido(String apellido);

}
