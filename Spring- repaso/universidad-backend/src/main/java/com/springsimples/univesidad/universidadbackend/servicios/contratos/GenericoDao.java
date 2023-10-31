package com.springsimples.univesidad.universidadbackend.servicios.contratos;

import java.util.Optional;


// utilizar una interfaz generica con entidad para cualquier dao para ahorrar codigo
public interface GenericoDao<E> {
    E save(E entity);
    Iterable<E> findAll();
    Optional<E> findById(Integer id);
    void deleteById(Integer id);

}
