package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Pabellon;
import com.springsimples.univesidad.universidadbackend.repositorios.PabellonRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PabellonDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PabellonDaoImpl extends GenericoDaoImpl<Pabellon, PabellonRepository> implements PabellonDao {

    @Autowired
    public PabellonDaoImpl(PabellonRepository repository) {
        super(repository);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Pabellon> findPabellonesByLocalidad(String localidad) {
        return repository.findPabellonesByLocalidad(localidad);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Pabellon> findPabellonByNombre(String nombre) {
        return repository.findPabellonByNombre(nombre);
    }
}
