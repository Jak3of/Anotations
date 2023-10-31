package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.servicios.contratos.GenericoDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


public class GenericoDaoImpl<E , R extends CrudRepository<E, Integer>> implements GenericoDao<E> {



    protected final R repository;

    public GenericoDaoImpl(R repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public E save(E entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<E> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<E> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
