package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.repositorios.AlumnosRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class PersonaDaoImplTest {

    PersonaDao personaDao;

    @Mock
    AlumnosRepository alumnosRepository;

    @BeforeEach
    void setUp() {
        personaDao = new PersonaDaoImpl(alumnosRepository);
    }

    @Test
    void buscarPorNombreYApellido() {

        //given

        personaDao.buscarPorNombreYApellido(anyString(), anyString());

        // then

        verify(alumnosRepository).buscarPorNombreYApellido(anyString(), anyString());

    }


    @Test
    void buscarPorDni() {

        // given

        personaDao.buscarPorDni(anyString());

        // then

        verify(alumnosRepository).buscarPorDni(anyString());

    }

    @Test
    void buscarPersonaPorApellido() {

        // given

        personaDao.buscarPersonaPorApellido(anyString());

        // then

        verify(alumnosRepository).buscarPersonaPorApellido(anyString());


    }
}