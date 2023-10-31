package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.repositorios.PersonaRepository;
import com.springsimples.univesidad.universidadbackend.repositorios.ProfesorRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.ProfesorDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProfesorDaoImpl extends PersonaDaoImpl implements ProfesorDao {

    @Autowired
    public ProfesorDaoImpl(@Qualifier("repositoryProfesor") PersonaRepository repository) {
        super(repository);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Persona> findProfesoresByCarrera(String carrera) {
        return ((ProfesorRepository)repository).findProfesoresByCarrera(carrera);
    }
}
