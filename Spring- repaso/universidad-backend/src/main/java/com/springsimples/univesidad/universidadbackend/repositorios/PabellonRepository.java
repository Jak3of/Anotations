package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PabellonRepository extends CrudRepository<Pabellon, Integer> {

    @Query("select p from Pabellon p where p.direccion.localidad like %?1%")
    Iterable<Pabellon> findPabellonesByLocalidad(String localidad);


    @Query("select p from Pabellon p where p.nombre = ?1")
    Optional<Pabellon> findPabellonByNombre(String nombre);
}
