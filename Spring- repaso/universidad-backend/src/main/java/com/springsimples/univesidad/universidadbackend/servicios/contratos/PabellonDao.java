package com.springsimples.univesidad.universidadbackend.servicios.contratos;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;

import java.util.Optional;

public interface PabellonDao extends GenericoDao<Pabellon> {

    Iterable<Pabellon> findPabellonesByLocalidad(String localidad);

    Optional<Pabellon> findPabellonByNombre(String nombre);

}
