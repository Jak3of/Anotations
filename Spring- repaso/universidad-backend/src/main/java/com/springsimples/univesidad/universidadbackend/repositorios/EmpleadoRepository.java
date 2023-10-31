package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository("repositoryEmpleado")
public interface EmpleadoRepository extends PersonaRepository{


    @Query("select e from Empleado e where e.tipoEmpleado = ?1")
    Iterable<Persona> findEmpleadoByTipoEmpleado(TipoEmpleado tipoEmpleado);
}
