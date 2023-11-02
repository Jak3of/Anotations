package com.springsimples.univesidad.universidadbackend.datos;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.*;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;

import java.math.BigDecimal;

public class DatosDummy {
    public static Carrera Carrera01(boolean conId) {
        return new Carrera((conId) ? null : 1, "Ingenieria en Sistemas", 50, 5);

    }

    public static Carrera Carrera02( boolean conId) {
        return new Carrera( (conId) ? null : 2, "Licenciatura en Sistemas", 45, 4);
    }

    public static Carrera Carrera03( boolean conId) {
        return new Carrera( (conId) ? null : 3, "Ingenieria Industrial", 50, 5);
    }


    public static Persona empleado01() {
        return new Empleado(null, "Lautaro", "Lopez", "92391919", new Direccion(), new BigDecimal("46750.70"), TipoEmpleado.ADMINISTRATIVO);

    }

    public static Persona empleado02() {
        return new Empleado(null, "Lenadro", "Lopez", "92391439", new Direccion(), new BigDecimal("46750.70"), TipoEmpleado.MANTENIMIENTO);
    }

    public static Persona profesor01() {
        return new Profesor(null, "Martin", "Lugone", "33845238", new Direccion(), new BigDecimal("46750.70"));

    }

    public static Persona profesor02() {
        return new Profesor(null, "Rentaro", "Lopez", "91391919", new Direccion(), new BigDecimal("46750.70"));
    }


    public static Persona alumno01() {
        return new Alumno(null , "Jhon", "Benitez", "43828382", new Direccion());

    }

    public static Persona alumno02() {

        return new Alumno(null , "Andres", "Benitez", "43828313", new Direccion());
    }

    public static Persona alumno03() {
        return new Alumno(null , "Joaquin", "Leon", "923123123", new Direccion());
    }


    public static Aula aula01()
    {
        return new Aula(null, 123, "24 x 36", 50, Pizarron.PIZARRA_BLANCA);
    }

    public static Aula aula02() {
        return new Aula(null, 231, "20 x 30", 50, Pizarron.PIZARRA_TIZA);
    }

    public static Aula aula03() {
        return new Aula(null, 451, "15 x 25", 50, Pizarron.PIZARRA_BLANCA);
    }

    public static Pabellon pabellon01(){
        return new Pabellon(1, 450.5 , "Pabellon Uno", new Direccion("Calle Uno", "1453", "1623", "","","Peña"));
    }

    public static Pabellon pabellon02(){
        return new Pabellon(2, 750.0 , "Pabellon Dos", new Direccion("Calle Dos", "584", "1623", "","","Peña"));
    }









}



