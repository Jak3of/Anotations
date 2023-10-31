package com.springsimples.univesidad.universidadbackend.commands;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Direccion;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PabellonDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class Pabelloncommands implements CommandLineRunner {

    @Autowired
    private PabellonDao pabellonDao;

    @Override
    public void run(String... args) throws Exception {

        /*Direccion dirp1 = new Direccion("Calle Uno", "1453", "1623", "","","Peña");
        Direccion dirp2 = new Direccion("Calle Dos", "584", "1623", "","","Peña");

        Pabellon pabellon1 = new Pabellon(null, 450.5 , "Pabellon Uno", dirp1);

        Pabellon pabellon2 = new Pabellon(null, 750.0 , "Pabellon Dos", dirp2);


        pabellonDao.save(pabellon1);
        pabellonDao.save(pabellon2);*/


        // probando query methodos para pabellon

        /*Iterable<Pabellon> pabellones = pabellonDao.findPabellonesByLocalidad("Peña");

        System.out.println("------ Pabelllones por localidad ------");
        pabellones.forEach(System.out::println);

        Optional<Pabellon> pabellon = pabellonDao.findPabellonByNombre("Pabellon Dos");

        System.out.println("------ Pabellon por nombre ------");
        pabellon.ifPresent(System.out::println);*/



    }
}
