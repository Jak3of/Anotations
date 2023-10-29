package com.springsimplespasos.hibernate.entidades.manytoone;

import com.springsimplespasos.hibernate.util.HibernateUtil;
import org.hibernate.Session;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class MainManyToOne {

    public static void main(String[] args) {
        // crud basic

        Session session = HibernateUtil.getSeccionSessionFactory().openSession();

        Persona juan = new Persona(null , "Juan");
        Persona maria = new Persona(null , "Maria");

        Telefono celularJuan = new Telefono(null , "1111111111");
        Telefono lineaJuan = new Telefono(null , "2222222222");

        // es obligatorio establecer la relacion entre las entidades y viseversa
        celularJuan.setPersona(juan);
        lineaJuan.setPersona(juan);
        juan.setTelefonos(Arrays.asList(celularJuan, lineaJuan));

        session.beginTransaction();

        //session.save(juan);
        //session.save(maria);

        Persona persona = session.get(Persona.class, 4);
        if (persona == null) {
            System.out.println("no existe la persona");
        } else {
            if (persona.getTelefonos().isEmpty()) {
                System.out.println("no tiene telefonos");
            } else {
                persona.getTelefonos().forEach(t -> System.out.println("numero: " + t.getNumero()));
            }
        }

        session.getTransaction().commit();




        session.close();
    }
}
