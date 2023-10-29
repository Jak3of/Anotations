package com.springsimplespasos.hibernate.pruebas;

import com.springsimplespasos.hibernate.entidades.SimpleEntity;
import com.springsimplespasos.hibernate.entidades.onetoone.Carnet;
import com.springsimplespasos.hibernate.entidades.onetoone.Socio;
import com.springsimplespasos.hibernate.util.HibernateUtil;
import org.hibernate.Session;

public class HibernateMain {

    public static void main(String[] args) {



        //SimpleEntity entity2 = new SimpleEntity();

        //entity2 = entity;
        //entity2.setNombre("Descripcion 2 !");
        //entity.setNombre("Descripcion Update!");

        Session session = HibernateUtil.getSeccionSessionFactory().openSession();

        //session.save(entity);

        //session.update(entity);

        //session.delete(entity);

        //entity = session.get(SimpleEntity.class, 2);

        //System.out.println( entity.getNombre() );
        //entity.setNombre("Descripcion saveorupdate!");
        //session.saveOrUpdate(entity);
        //session.saveOrUpdate(entity2);

        session.beginTransaction();
        Socio socio = new Socio();
        socio.setNombre("Carlos");
        socio.setDocumento("163452789");

        Carnet carnet = new Carnet();
        carnet.setNumero("000000016");

        carnet.setSocio(socio);
        socio.setCarnet(carnet);



        session.save(socio);

        session.getTransaction().commit();
        session.close();
    }

}
