package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.repositorios.AlumnosRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

@SpringBootTest
class AlumnoDaoImplTest {

    @MockBean
    AlumnosRepository alumnosRepository;

    @Autowired
    AlumnoDaoImpl alumnoDao;



    @Test
    void buscarAlumnosPorNombreCarrera() {

        // when
        alumnoDao.buscarAlumnosPorNombreCarrera(anyString());

        // then
        verify(alumnosRepository).buscarAlumnosPorNombreCarrera(anyString());
    }
}