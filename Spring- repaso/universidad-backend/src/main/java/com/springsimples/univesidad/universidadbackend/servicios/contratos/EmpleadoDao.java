package com.springsimples.univesidad.universidadbackend.servicios.contratos;


import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;

public interface EmpleadoDao extends PersonaDao {

    Iterable<Persona> findEmpleadoByTipoEmpleado(TipoEmpleado tipoEmpleado);
}
