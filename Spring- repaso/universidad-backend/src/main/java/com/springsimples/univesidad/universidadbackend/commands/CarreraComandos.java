package com.springsimples.univesidad.universidadbackend.commands;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CarreraComandos implements CommandLineRunner {

    @Autowired
    private CarreraDao servicio;

    @Override
    public void run(String... args) throws Exception {
        /*
        Carrera ingSistemas = new Carrera(null, "Ingenieria en sistemas",50,5);
        Carrera save = servicio.save(ingSistemas);
        System.out.println( save.toString());
        */

        /*Carrera carrera = null;
        Optional<Carrera> oCarrera = servicio.findById(1);
        if (oCarrera.isPresent()) {
            carrera = oCarrera.get();
            System.out.println(carrera.toString());
        } else {
            System.out.println("no existe");
        }
        carrera.setCantidadMaterias(65);
        carrera.setCantidadAnios(6);

        servicio.save(carrera);

        System.out.println( servicio.findById(1).orElse(new Carrera()).toString());

        servicio.deleteById(1);

        System.out.println(servicio.findById(1).orElse(new Carrera()).toString());
*/


        /*Carrera ingSistemas = new Carrera(null, "Ingenieria en Sistemas",60,5);
        Carrera ingIndustrial = new Carrera(null, "Ingenieria en industrial",55,5);
        Carrera ingAlimentos = new Carrera(null, "Ingenieria en alimentos",53,5);
        Carrera ingElectronica = new Carrera(null, "Ingenieria en electronica",45,5);
        Carrera ingMecatronica = new Carrera(null, "Ingenieria en mecatronica",50,5);
        Carrera ingQuimica = new Carrera(null, "Ingenieria en quimica",50,5);
        Carrera licSistemas = new Carrera(null, "Licenciatura en Sistemas",40,5);

        servicio.save(ingSistemas);
        servicio.save(ingIndustrial);
        servicio.save(ingAlimentos);
        servicio.save(ingElectronica);
        servicio.save(ingMecatronica);
        servicio.save(ingQuimica);
        servicio.save(licSistemas);*/



        // ahora ingora case pero si se envia otra cosa no genera
        /*List<Carrera> carreras = (List<Carrera>) servicio.findCarrerasByNombreContains("SISTEMAS");
        carreras.forEach(System.out::println);*/

        // YA DA IGUAL SI ES IGNORECASE O NO
        /*List<Carrera> carreras1 = (List<Carrera>) servicio.findCarrerasByNombreContainsIgnoreCase("ELECTRONICA");
        carreras1.forEach(System.out::println);*/

        // mayor a 4 anios sin contar los de 4 (4)
        // si es (3) es mayor que 3 sin contar los de 3
        /*List<Carrera> carrerasPorAnios = (List<Carrera>) servicio.findCarrerasByCantidadAniosAfter(3);
        carrerasPorAnios.forEach(System.out::println);*/



        /*List<Carrera> carrerasPorProfesor = (List<Carrera>) servicio.buscarCarrerasPorProfesorNombreYApellido("Jim", "Walmer");

        carrerasPorProfesor.forEach(System.out::println);*/


    }
}
