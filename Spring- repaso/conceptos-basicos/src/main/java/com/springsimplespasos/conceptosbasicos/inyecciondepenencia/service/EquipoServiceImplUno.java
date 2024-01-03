package com.springsimplespasos.conceptosbasicos.inyecciondepenencia.service;

import com.springsimplespasos.conceptosbasicos.inyecciondepenencia.domain.Equipo;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Component("equipo-argentino")
@ConditionalOnProperty(prefix = "app", name = "implementacion", havingValue = "argentina")
public class EquipoServiceImplUno implements EquipoService {

    private List<Equipo> equipos = new ArrayList<>(Arrays.asList(
            new Equipo(1, "RiverPlate", 1901, LocalDate.of(1901, 8, 25)),
            new Equipo(2, "Boca Juniors", 1905, LocalDate.of(1905, 9, 3)),
            new Equipo(3, "Independiente", 1905, LocalDate.of(1905, 1, 1))
    ));

    @Override
    public Optional<Equipo> obtenerEquipoPorId(Integer id) {
        return Optional.empty();
    }

    @Override
    public Iterable<Equipo> obtenerTodos() {
        return equipos;
    }
}
