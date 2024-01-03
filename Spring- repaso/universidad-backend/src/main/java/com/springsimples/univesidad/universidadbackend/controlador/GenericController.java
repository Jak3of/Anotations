package com.springsimples.univesidad.universidadbackend.controlador;

import com.springsimples.univesidad.universidadbackend.exception.BadRequestException;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.GenericoDao;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

public class GenericController <E, S extends GenericoDao<E>> {

    protected final S service;
    protected String nombreEntidad;

    public GenericController(S service) {
        this.service = service;
    }

    @GetMapping
    public List<E> ObtenerTodos(){
        List<E> listado = (List<E>) service.findAll();
        if (listado.isEmpty()){
            throw new BadRequestException("No existen "+nombreEntidad);
        }

        return listado;
    }





}
