package com.springsimples.univesidad.universidadbackend.commands;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Direccion;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Empleado;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.EmpleadoDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class Empleadocommands implements CommandLineRunner {


    @Autowired
    @Qualifier("empleadoDaoImpl")
    private PersonaDao servicio;

    @Override
    public void run(String... args) throws Exception {

        /*Empleado empleado_1 = new Empleado( null, "Gordon", "Freeman", "981913337",
                new Direccion("Calle forane", "513","1317","", "", "Junin"),
                BigDecimal.valueOf(3000.0) , TipoEmpleado.MANTENIMIENTO);

        Empleado empleado_2 = new Empleado( null, "Black", "Meza", "981924327",
                new Direccion("Calle forane", "313","1217","", "", "Junin"),
                BigDecimal.valueOf(8000.0) , TipoEmpleado.ADMINISTRATIVO);



        servicio.save(empleado_1);
        servicio.save(empleado_2);*/


        /*Iterable<Persona> personas = ((EmpleadoDao)servicio).findEmpleadoByTipoEmpleado(TipoEmpleado.ADMINISTRATIVO);


        personas.forEach(System.out::println);*/


    }
}
