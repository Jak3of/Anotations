package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Profesor;
import org.assertj.core.util.Sets;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import static com.springsimples.univesidad.universidadbackend.datos.DatosDummy.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class ProfesorRepositoryTest {

    @Autowired
    @Qualifier("repositoryProfesor")
    ProfesorRepository profesorRepository;

    @Autowired
    CarreraRepository carreraRepository;


    @Test
    void findProfesoresByCarrera() {

        Iterable<Persona> profesores = profesorRepository.saveAll(Arrays.asList(
                profesor01(), profesor02()
        ));

        Carrera save = carreraRepository.save(Carrera01(true));

        for (Persona profesor : profesores) {
            ((Profesor) profesor).setCarreras(Sets.newHashSet(Collections.singleton(save)));
        }

        List<Persona> expected = (List<Persona>) profesorRepository.findProfesoresByCarrera(Carrera01(true).getNombre());


        assertThat(expected.size() == 2).isTrue();


    }
}