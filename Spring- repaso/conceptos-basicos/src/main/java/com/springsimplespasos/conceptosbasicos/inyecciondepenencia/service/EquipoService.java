package com.springsimplespasos.conceptosbasicos.inyecciondepenencia.service;

import com.springsimplespasos.conceptosbasicos.inyecciondepenencia.domain.Equipo;

import java.util.Optional;

public interface EquipoService {
    Optional<Equipo> obtenerEquipoPorId(Integer id);
    Iterable<Equipo> obtenerTodos();
}
