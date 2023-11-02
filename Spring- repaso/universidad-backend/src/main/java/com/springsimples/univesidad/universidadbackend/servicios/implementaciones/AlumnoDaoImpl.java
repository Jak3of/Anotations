package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.repositorios.AlumnosRepository;
import com.springsimples.univesidad.universidadbackend.repositorios.PersonaRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.AlumnoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AlumnoDaoImpl extends PersonaDaoImpl implements AlumnoDao {

    @Autowired
    public AlumnoDaoImpl(@Qualifier("repositoryAlumnos") PersonaRepository repository) {
        super(repository);
    }


    @Override
    @Transactional(readOnly = true)
    public Iterable<Persona> buscarAlumnosPorNombreCarrera(String nombre) {
        return ((AlumnosRepository)repository).buscarAlumnosPorNombreCarrera(nombre);
    }


}
