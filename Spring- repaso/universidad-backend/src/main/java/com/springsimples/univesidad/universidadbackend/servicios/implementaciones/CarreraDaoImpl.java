package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.repositorios.CarreraRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CarreraDaoImpl extends GenericoDaoImpl<Carrera, CarreraRepository> implements CarreraDao {


    // cargar repository - genericodao esta el repository generico a traves de entidad y repositorios
    @Autowired
    public CarreraDaoImpl(CarreraRepository repository) {
        super(repository);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Carrera> findCarrerasByNombreContains(String nombre) {
        return repository.findCarrerasByNombreContains(nombre);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Carrera> findCarrerasByNombreContainsIgnoreCase(String nombre) {
        return repository.findCarrerasByNombreContainsIgnoreCase(nombre);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Carrera> findCarrerasByCantidadAniosAfter(Integer cantidad) {
        return repository.findCarrerasByCantidadAniosAfter(cantidad);
    }
}
