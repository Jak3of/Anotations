package com.springsimplespasos.hibernate.pruebas;

import com.springsimplespasos.hibernate.entidades.manytoone.Persona;
import com.springsimplespasos.hibernate.entidades.manytoone.Telefono;
import com.springsimplespasos.hibernate.util.HibernateUtil;
import org.hibernate.Session;

import javax.persistence.Query;
import java.util.List;

public class MainPQL {
    public static void main(String[] args) {
        // SQL NATIVO SELECT * FROM personas WHERE codigo = ?

        Session session = HibernateUtil.getSeccionSessionFactory().openSession();

        Query query = session.createQuery("select p from Persona p where p.codigo = ?1");
        query.setParameter(1,  Integer.parseInt("3"));

        Persona persona = (Persona) query.getSingleResult();

        System.out.println(persona.getNombre());


        // SELECT * FROM personas p JOIN telefonos t ON p.codigo = t.codigo whete p.codigo = ?

        Query query2 = session.createQuery("select p.telefonos from Persona p where p.codigo = :codigo");
        query2.setParameter("codigo",  Integer.parseInt("3"));

        List<Telefono> telefonos = (List<Telefono>) query2.getResultList();
        telefonos.forEach(
                t -> System.out.println(t.getNumero())
        );

        session.close();
    }
}
