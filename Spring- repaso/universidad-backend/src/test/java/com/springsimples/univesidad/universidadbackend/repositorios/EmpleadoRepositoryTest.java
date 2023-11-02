package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static com.springsimples.univesidad.universidadbackend.datos.DatosDummy.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class EmpleadoRepositoryTest {

    @Autowired
    @Qualifier("repositoryEmpleado")
    EmpleadoRepository empleadoRepository;

    @Test
    void findEmpleadoByTipoEmpleado() {

        // given

        Iterable<Persona> save = empleadoRepository.saveAll(Arrays.asList(empleado01(), empleado02()));


        // when

        List<Persona> expected = (List<Persona>) empleadoRepository.findEmpleadoByTipoEmpleado(TipoEmpleado.ADMINISTRATIVO);

        // then

        assertThat(((List<Persona>)save).size() == 2).isTrue();

        assertThat(expected.size() == 1).isTrue();


    }
}