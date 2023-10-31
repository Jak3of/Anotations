package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository("repositoryAlumnos")
public interface AlumnosRepository extends PersonaRepository{


    // el carrera.nombre tiene una inicializacion perezosa no puede instanciar los objetos de carrera
    // y con join fetch desacemos de la inicializacion perezosa y ingresa realmente
    // una buena practica es cuando la terminacion de las relaciones many el tipo de carga perezosa lazy
    // y eso hace que usemos "join fetch a.carrera c where c.nombre" importante
    @Query("select a from Alumno a join fetch a.carrera c where c.nombre = ?1")
    Iterable<Persona> buscarAlumnosPorNombreCarrera(String nombre);
}
