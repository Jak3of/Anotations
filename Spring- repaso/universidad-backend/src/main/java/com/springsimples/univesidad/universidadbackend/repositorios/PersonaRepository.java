package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

// para que no nos genere un bean de este repositorio pero para generar
// dentro de las clases hijas que implementen este repositorio
@NoRepositoryBean
public interface PersonaRepository extends CrudRepository<Persona, Integer> {

    @Query("select p from Persona p where p.nombre = ?1 and p.apellidos = ?2")
    Optional<Persona> buscarPorNombreYApellido(String nombre, String apellido);

    @Query("select p from Persona p where p.dni = ?1")
    Optional<Persona> buscarPorDni(String dni);

    @Query("select p from Persona p where p.apellidos like %?1%")
    Iterable<Persona> buscarPersonaPorApellido(String apellido);
}
