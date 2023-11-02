package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.repositorios.PabellonRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

@SpringBootTest
class PabellonDaoImplTest {

    @Autowired
    PabellonDaoImpl pabellonDao;

    @MockBean
    PabellonRepository repository;

    @Test
    void findPabellonesByLocalidad() {

        pabellonDao.findPabellonesByLocalidad(anyString());

        verify(repository).findPabellonesByLocalidad(anyString());

    }

    @Test
    void findPabellonByNombre() {

        pabellonDao.findPabellonByNombre(anyString());

        verify(repository).findPabellonByNombre(anyString());
    }
}