package com.springsimplespasos.hibernate.entidades.manytomany;

import com.springsimplespasos.hibernate.util.HibernateUtil;
import org.hibernate.Session;

import java.util.Arrays;

public class MainManyToMany {
    public static void main(String[] args) {
        // crud basic
        Session session = HibernateUtil.getSeccionSessionFactory().openSession();

        // crear el crud

        Usuario admin = new Usuario(1, "admin");
        Usuario user = new Usuario(2 , "user");

        Publicacion publicacion1 = new Publicacion(1 , "Texto de la publicacion 1");
        Publicacion publicacion2 = new Publicacion(2 , "Texto de la publicacion 2");
        Publicacion publicacion3 = new Publicacion(3 , "Texto de la publicacion 3");
        Publicacion publicacion4 = new Publicacion(4 , "Texto de la publicacion 4");

        admin.setPublicaciones(Arrays.asList(publicacion1, publicacion2));
        user.setPublicaciones(Arrays.asList(publicacion3, publicacion4, publicacion2));




        session.beginTransaction();

        /*
        session.saveOrUpdate(admin);
        session.saveOrUpdate(user);
        session.saveOrUpdate(publicacion1);
        session.saveOrUpdate(publicacion2);
        session.saveOrUpdate(publicacion3);
        session.saveOrUpdate(publicacion4);*/

        Usuario usuario = session.get(Usuario.class, 2);

        usuario.getPublicaciones().forEach(
                p -> System.out.println(p.getTexto())
        );
        session.getTransaction().commit();



        session.close();

    }
}
