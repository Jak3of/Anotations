package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.repositorios.PersonaRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public class PersonaDaoImpl extends GenericoDaoImpl<Persona, PersonaRepository> implements PersonaDao {

    public PersonaDaoImpl( PersonaRepository repository) {
        super(repository);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Persona> buscarPorNombreYApellido(String nombre, String apellido) {
        return repository.buscarPorNombreYApellido(nombre, apellido);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Persona> buscarPorDni(String dni) {
        return repository.buscarPorDni(dni);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Persona> buscarPersonaPorApellido(String apellido) {
        return repository.buscarPersonaPorApellido(apellido);
    }
}
