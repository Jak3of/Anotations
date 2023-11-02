package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;
import com.springsimples.univesidad.universidadbackend.repositorios.EmpleadoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

@SpringBootTest
class EmpleadoDaoImplTest {


    @MockBean
    EmpleadoRepository repository;

    @Autowired
    EmpleadoDaoImpl empleadoDao;





    @Test
    void findEmpleadoByTipoEmpleado() {

        // when

        empleadoDao.findEmpleadoByTipoEmpleado(TipoEmpleado.ADMINISTRATIVO);

        // then

        verify(repository).findEmpleadoByTipoEmpleado(TipoEmpleado.ADMINISTRATIVO);


    }
}