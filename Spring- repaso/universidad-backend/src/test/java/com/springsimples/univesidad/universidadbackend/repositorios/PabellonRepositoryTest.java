package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.springsimples.univesidad.universidadbackend.datos.DatosDummy.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class PabellonRepositoryTest {

    @Autowired
    private PabellonRepository pabellonRepository;

    @BeforeEach
    void setUp() {
        pabellonRepository.saveAll(
                Arrays.asList(pabellon01(), pabellon02())
        );
    }

    @Test
    void findPabellonesByLocalidad() {

        List<Pabellon> pabellones = (List<Pabellon>) pabellonRepository.findPabellonesByLocalidad("Peña");


        assertThat(pabellones.size() == 2).isTrue();

    }

    @Test
    void findPabellonByNombre() {

        Optional<Pabellon> pabellon = pabellonRepository.findPabellonByNombre("Pabellon Dos");

        assertThat(pabellon.isPresent()).isTrue();
    }
}