package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;
import com.springsimples.univesidad.universidadbackend.repositorios.EmpleadoRepository;
import com.springsimples.univesidad.universidadbackend.repositorios.PersonaRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.EmpleadoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmpleadoDaoImpl extends PersonaDaoImpl implements EmpleadoDao {

    @Autowired
    public EmpleadoDaoImpl( @Qualifier("repositoryEmpleado") PersonaRepository repository) {
        super(repository);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Persona> findEmpleadoByTipoEmpleado(TipoEmpleado tipoEmpleado) {
        return ((EmpleadoRepository)repository).findEmpleadoByTipoEmpleado(tipoEmpleado);
    }
}
