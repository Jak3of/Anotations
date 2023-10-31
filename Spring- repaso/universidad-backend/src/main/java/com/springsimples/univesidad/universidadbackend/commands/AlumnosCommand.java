package com.springsimples.univesidad.universidadbackend.commands;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Alumno;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.AlumnoDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import java.util.Optional;

@Component
public class AlumnosCommand implements CommandLineRunner {

    @Autowired
    @Qualifier("alumnoDaoImpl")
    private PersonaDao servicio;

    @Autowired
    private CarreraDao carrera;

    @Override
    public void run(String... args) throws Exception {




        /*Optional<Carrera> ingSistemas = carrera.findById(2);

        Iterable<Persona> alumnos = servicio.findAll();*/


        /*alumnos.forEach(alumno -> ((Alumno)alumno).setCarrera(ingSistemas.get()));
        alumnos.forEach(alumno -> servicio.save(alumno));*/

        /*Optional<Persona> alumno_1 = servicio.findById(1);
        Optional<Carrera> carrera_2 = carrera.findById(2);*/

        /*Optional<Persona> personaNomApe = servicio.buscarPorNombreYApellido(alumno_1.get().getNombre(),alumno_1.get().getApellidos());

        System.out.println(personaNomApe.toString());

        Optional<Persona> personaDni = servicio.buscarPorDni(alumno_1.get().getDni());

        System.out.println(personaDni.toString());

        Iterable<Persona> personaApe = servicio.buscarPersonaPorApellido(alumno_1.get().getApellidos());

        System.out.println(personaApe.toString());*/


        /*Iterable<Persona> alumnos = ((AlumnoDao)servicio).buscarAlumnosPorNombreCarrera(carrera_2.get().getNombre());

        alumnos.forEach(System.out::println);*/

    }
}
