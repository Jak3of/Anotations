package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.datos.DatosDummy;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Empleado;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Profesor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.springsimples.univesidad.universidadbackend.datos.DatosDummy.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class PersonaRepositoryTest {


    @Autowired
    @Qualifier("repositoryAlumnos")
    PersonaRepository alumnoRepository;


    @Autowired
    @Qualifier("repositoryProfesor")
    PersonaRepository profesorRepository;

    @Autowired
    @Qualifier("repositoryEmpleado")
    PersonaRepository empleadoRepository;


    @BeforeEach
    void setUp() {

        //given - Personas

        empleadoRepository.save(empleado02());


    }


    @Test
    @DisplayName("Buscar persona por nombre y apellido")
    void buscarPorNombreYApellido() {

        // given

        Persona save = empleadoRepository.save(empleado01());


        // when
        Optional<Persona> expected = empleadoRepository.buscarPorNombreYApellido(empleado01().getNombre(), empleado01().getApellidos());

        // then

        assertThat(expected.get()).isInstanceOf(Empleado.class);
        assertThat(expected.get()).isEqualTo(save);

    }

    @Test
    @DisplayName("Buscar persona por DNI")
    void buscarPorDni() {

        // given

        Persona save = profesorRepository.save(profesor01());

        // when

        Optional<Persona> expected = profesorRepository.buscarPorDni(profesor01().getDni());


        // then

        assertThat(expected.get()).isInstanceOf(Profesor.class);
        assertThat(expected.get()).isEqualTo(save);

        assertThat(expected.get().getDni()).isEqualTo(save.getDni());

    }

    @Test
    @DisplayName("Buscar persona por Apellido")
    void buscarPersonaPorApellido() {

        // given

        Iterable<Persona> save = alumnoRepository.saveAll(Arrays.asList(alumno01(),alumno02(),alumno03()));

        // when
        String apellido = "Benitez";
        List<Persona> expected = (List<Persona>) alumnoRepository.buscarPersonaPorApellido(apellido);


        // then

        assertThat(expected.size() == 2).isTrue();

    }


}