package com.springsimplespasos.conceptosbasicos.inyecciondepenencia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class EquipoPrueba implements CommandLineRunner {

    @Autowired
    //@Qualifier("equipo-espaniol")
    EquipoService equipoService;

    @Override
    public void run(String... args) throws Exception {
        equipoService.obtenerTodos().forEach(System.out::println);

    }
}
