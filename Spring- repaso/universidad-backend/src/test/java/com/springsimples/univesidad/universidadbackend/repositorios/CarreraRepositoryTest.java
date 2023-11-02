package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.datos.DatosDummy;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class CarreraRepositoryTest {


    @Autowired
    CarreraRepository carreraRepository;

    @BeforeEach
    void SetUp() {

        // given - Carreras

        carreraRepository.save(DatosDummy.Carrera01(false));
        carreraRepository.save(DatosDummy.Carrera02(false));
        carreraRepository.save(DatosDummy.Carrera03(false));

    }

    @AfterEach
    void tearDown() {
        carreraRepository.deleteAll();
    }


    @Test
    @DisplayName("Buscar carreras por nombre")
    void findCarrerasByNombreContains() {

        // given

        // when

        Iterable<Carrera> carreras = carreraRepository.findCarrerasByNombreContains("Sistemas");


        // then

        assertThat(((List<Carrera>)carreras).size() ==2).isTrue();


    }

    @Test
    @DisplayName("Buscar carreras por nombre No case Sensitive")
    void findCarrerasByNombreContainsIgnoreCase() {

        // given



        // when

        List<Carrera> carreras = (List<Carrera>) carreraRepository.findCarrerasByNombreContainsIgnoreCase("sistemas");

        // then

        assertThat(carreras.size() ==2).isTrue();

    }

    @Test
    @DisplayName("Buscar carreras mayor por N años")
    void findCarrerasByCantidadAniosAfter() {



        // when

        List<Carrera> carreras = (List<Carrera>) carreraRepository.findCarrerasByCantidadAniosAfter(4);

        // then

        assertThat(carreras.size() == 2).isTrue();


    }

    @Test
    @Disabled
    void buscarCarrerasPorProfesorNombreYApellido() {
    }
}