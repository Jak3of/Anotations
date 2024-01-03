package com.springsimplespasos.conceptosbasicos.inyecciondepenencia.service;

import com.springsimplespasos.conceptosbasicos.inyecciondepenencia.domain.Equipo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

//@Primary
@Component("equipo-espaniol")
@ConditionalOnProperty(prefix = "app", name = "implementacion", havingValue = "espania")
public class EquipoServiceImplDos implements EquipoService {

    private List<Equipo> equiposespaniol = new ArrayList<>(Arrays.asList(
            new Equipo(1, "Real Madrid", 1902, LocalDate.of(1902, 8, 30)),
            new Equipo(2, "Barcelona", 1909, LocalDate.of(1909, 11, 29)),
            new Equipo(3, "Atletico Madrid", 1903, LocalDate.of(1903, 8, 30))

    ));

    @Override
    public Optional<Equipo> obtenerEquipoPorId(Integer id) {
        return Optional.empty();
    }

    @Override
    public Iterable<Equipo> obtenerTodos() {
        return this.equiposespaniol;
    }
}
