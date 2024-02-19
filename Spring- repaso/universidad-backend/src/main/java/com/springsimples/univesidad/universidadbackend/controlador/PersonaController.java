package com.springsimples.univesidad.universidadbackend.controlador;

import com.springsimples.univesidad.universidadbackend.exception.BadRequestException;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

public class PersonaController extends GenericController<Persona, PersonaDao> {
    public PersonaController(PersonaDao service) {
        super(service);

    }

    @GetMapping("/nombre-apellido")
    public Persona ObtenerPorNombreYApellido(@RequestParam String nombre, @RequestParam String apellido){
        Optional<Persona> oPersona = service.buscarPorNombreYApellido(nombre, apellido);
        if (!oPersona.isPresent()){
            throw new BadRequestException(String.format("No existe una persona con nombre %s y apellido %s", nombre, apellido));
        }
        return oPersona.get();
    }


}
