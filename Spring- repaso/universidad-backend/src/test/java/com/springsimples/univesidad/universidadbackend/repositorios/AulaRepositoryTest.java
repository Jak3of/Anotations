package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Aula;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
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
class AulaRepositoryTest {


    @Autowired
    AulaRepository aulaRepository;

    @Autowired
    PabellonRepository pabellonRepository;


    @BeforeEach
    void setUp() {


    }

    @Test
    void findAulaByPizarron() {

         List<Aula> save = (List<Aula>) aulaRepository.saveAll(Arrays.asList(
                aula01(), aula02(), aula03()
        ));


        List<Aula> aulas = (List<Aula>) aulaRepository.findAulaByPizarron(Pizarron.PIZARRA_BLANCA);


        assertThat(aulas.size() == 2).isTrue();



    }



    @Test
    void findAulaByPabellon() {

        List<Aula> aulas = (List<Aula>) aulaRepository.saveAll(Arrays.asList(
                aula01(), aula02(), aula03()
        ));

        aulas.forEach(
                aula -> {
                    aula.setPabellon(pabellon01());
                }
        );

        aulaRepository.saveAll(aulas);

        List<Aula> expected = (List<Aula>) aulaRepository.findAulaByPabellon("Pabellon Uno");


        assertThat(expected.size() == 3).isTrue();
    }


    @Test
    void findAulaByNroAula() {

        List<Aula> save = (List<Aula>) aulaRepository.saveAll(Arrays.asList(
                aula01(), aula02(), aula03()
        ));

        Optional<Aula> aula = aulaRepository.findAulaByNroAula(123);

        assertThat(aula.isPresent()).isTrue();

    }
}