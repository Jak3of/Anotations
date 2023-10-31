package com.springsimples.univesidad.universidadbackend;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Direccion;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Profesor;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.ProfesorDao;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.Set;


@Component
public class ProfesorCommand implements CommandLineRunner {


    @Autowired
    @Qualifier("profesorDaoImpl")
    private PersonaDao servicio;

    @Autowired
    private CarreraDao carreraDao;

    @Override
    public void run(String... args) throws Exception {


        /*Profesor profesor = new Profesor( null, "Jim", "Walmer", "98193827",
                new Direccion("Calle forane", "569","1367","", "", "Junin"),
                BigDecimal.valueOf(7000.0));*/

        // obtener profesor por id

        /*Profesor profesor = (Profesor) servicio.findById(3).get();

        Optional<Carrera> ingSistemas = carreraDao.findById(2);
        Optional<Carrera> ingIndustrial = carreraDao.findById(3);

        profesor.setCarreras(Set.of(ingSistemas.get(), ingIndustrial.get()));


        servicio.save(profesor);*/

        /*Iterable<Persona> personas = ((ProfesorDao)servicio).findAll();



        personas.forEach(System.out::println);*/


        /*Iterable<Persona> profesores = ((ProfesorDao)servicio).findProfesoresByCarrera("Ingenieria en Sistemas");

        profesores.forEach(System.out::println);*/




    }
}
