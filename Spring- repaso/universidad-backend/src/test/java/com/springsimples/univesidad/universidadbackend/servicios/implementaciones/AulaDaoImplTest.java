package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import com.springsimples.univesidad.universidadbackend.repositorios.AulaRepository;
import com.springsimples.univesidad.universidadbackend.repositorios.PabellonRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

@SpringBootTest
class AulaDaoImplTest {


    @Autowired
    AulaDaoImpl aulaDao;

    @MockBean
    AulaRepository aulaRepository;




    @Test
    void findAulaByPizarron() {

        aulaDao.findAulaByPizarron(Pizarron.PIZARRA_BLANCA);


        verify(aulaRepository).findAulaByPizarron(Pizarron.PIZARRA_BLANCA);

    }

    @Test
    void findAulaByPabellon() {

        aulaDao.findAulaByPabellon(anyString());

        verify(aulaRepository).findAulaByPabellon(anyString());
    }

    @Test
    void findAulaByNroAula() {

        aulaDao.findAulaByNroAula(anyInt());

        verify(aulaRepository).findAulaByNroAula(anyInt());

    }


}