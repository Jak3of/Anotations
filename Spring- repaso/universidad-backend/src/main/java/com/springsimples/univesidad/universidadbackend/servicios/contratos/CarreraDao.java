package com.springsimples.univesidad.universidadbackend.servicios.contratos;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CarreraDao extends GenericoDao<Carrera> {
    Iterable<Carrera> findCarrerasByNombreContains(String nombre);

    Iterable<Carrera> findCarrerasByNombreContainsIgnoreCase(String nombre);


    Iterable<Carrera> findCarrerasByCantidadAniosAfter(Integer cantidad);


}
