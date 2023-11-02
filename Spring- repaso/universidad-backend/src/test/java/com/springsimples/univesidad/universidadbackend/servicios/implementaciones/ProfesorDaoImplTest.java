package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.repositorios.ProfesorRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

@SpringBootTest
class ProfesorDaoImplTest {

    @Autowired
    ProfesorDaoImpl profesorDao;

    @MockBean
    ProfesorRepository repository;

    @Test
    void findProfesoresByCarrera() {

        profesorDao.findProfesoresByCarrera(anyString());

        verify(repository).findProfesoresByCarrera(anyString());
    }
}