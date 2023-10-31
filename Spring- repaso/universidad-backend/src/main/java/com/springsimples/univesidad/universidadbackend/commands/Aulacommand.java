package com.springsimples.univesidad.universidadbackend.commands;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Aula;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Direccion;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.AulaDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PabellonDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class Aulacommand implements CommandLineRunner {

    @Autowired
    private AulaDao servicio;

    @Autowired
    private PabellonDao pabellonDao;

    @Override
    public void run(String... args) throws Exception {

/*

        Aula aula123 = new Aula( 1 , 123, "24 x 36", 50 , Pizarron.PIZARRA_BLANCA );

        Aula aula231 = new Aula( 2 , 231, "20 x 30", 50 , Pizarron.PIZARRA_TIZA);
        Aula aula451 = new Aula( 3 , 451, "15 x 25", 50 , Pizarron.PIZARRA_BLANCA);
*/

/*
        servicio.save(aula123);
        servicio.save(aula231);
        servicio.save(aula451);
*/


        /*Aula a1 = servicio.findById(1).get();
        Aula a2 = servicio.findById(2).get();
        Aula a3 = servicio.findById(3).get();

        Pabellon p1 = pabellonDao.findById(1).get();
        Pabellon p2 = pabellonDao.findById(2).get();

        a1.setPabellon(p1);
        a2.setPabellon(p1);
        a3.setPabellon(p2);

        servicio.save(a1);
        servicio.save(a2);
        servicio.save(a3);*/


        // probar servicios de query method

        /*Iterable<Aula> aulasPorPizarron = servicio.findAulaByPizarron(Pizarron.PIZARRA_BLANCA);

        System.out.println("---------Aulas por pizarron--------");
        aulasPorPizarron.forEach(System.out::println);


        Iterable<Aula> aulasPorPabellon = servicio.findAulaByPabellon("Pabellon Dos");

        System.out.println("---------Aulas por pabellon--------");
        aulasPorPabellon.forEach(System.out::println);


        Optional<Aula> aula = servicio.findAulaByNroAula(123);

        System.out.println("---------Aula por nroAula--------");
        aula.ifPresent(System.out::println);*/









    }
}
