package com.springsimples.univesidad.universidadbackend.controlador;

import com.springsimples.univesidad.universidadbackend.exception.BadRequestException;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.GenericoDao;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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

    /*@GetMapping("/{id}")
    public E ObtenerPorId(@PathVariable Integer id) { // recogemos el id de la url mediante el @PathVariable({id})
        Optional<E> objeto = service.findById(id);
        if (!objeto.isPresent()) {
            throw new BadRequestException(String.format("No existe %s con id %d ", nombreEntidad, id));
        }
        return objeto.get();
    }*/





}
