package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.repositorios.CarreraRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static com.springsimples.univesidad.universidadbackend.datos.DatosDummy.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CarreraDaoImplTest {


    // ahora con mokito

    CarreraDao carreraDao;

    CarreraRepository carreraRepository;


    @BeforeEach
    void setUp() {

        carreraRepository = mock( CarreraRepository.class);

        carreraDao = new CarreraDaoImpl(carreraRepository);

        // que es un mock?
        //
    }

    @Test
    void findCarrerasByNombreContains() {

        // given

        String nombre = "Ingenieria";
        when(carreraRepository.findCarrerasByNombreContains(nombre))
                .thenReturn(Arrays.asList(Carrera01(true), Carrera03(true)));

        // when

        List<Carrera> expected = (List<Carrera>) carreraDao.findCarrerasByNombreContains(nombre);


        // then

        assertThat(expected.get(0)).isEqualTo(Carrera01(true));
        assertThat(expected.get(1)).isEqualTo(Carrera03(true));

        // veficar si se usa el metodo correspondiente
        verify(carreraRepository).findCarrerasByNombreContains(nombre);

    }

    @Test
    void findCarrerasByNombreContainsIgnoreCase() {


        // given

        String nombre = "ingenieria";
        when(carreraRepository.findCarrerasByNombreContainsIgnoreCase(nombre))
                .thenReturn(Arrays.asList(Carrera01(true), Carrera03(true)));

        // when

        List<Carrera> expected = (List<Carrera>) carreraDao.findCarrerasByNombreContainsIgnoreCase(nombre);


        // then

        assertThat(expected.get(0)).isEqualTo(Carrera01(true));
        assertThat(expected.get(1)).isEqualTo(Carrera03(true));

        // veficar si se usa el metodo correspondiente
        verify(carreraRepository).findCarrerasByNombreContainsIgnoreCase(nombre);


    }

    @Test
    void findCarrerasByCantidadAniosAfter() {


        // given

        int cantidad = 4;
        when(carreraRepository.findCarrerasByCantidadAniosAfter(cantidad))
                .thenReturn(Arrays.asList(Carrera01(true), Carrera03(true)));

        // when

        List<Carrera> expected = (List<Carrera>) carreraDao.findCarrerasByCantidadAniosAfter(cantidad);


        // then

        assertThat(expected.get(0)).isEqualTo(Carrera01(true));
        assertThat(expected.get(1)).isEqualTo(Carrera03(true));

        // veficar si se usa el metodo correspondiente
        verify(carreraRepository).findCarrerasByCantidadAniosAfter(cantidad);

    }

    @Test
    @Disabled
    void buscarCarrerasPorProfesorNombreYApellido() {



    }
}