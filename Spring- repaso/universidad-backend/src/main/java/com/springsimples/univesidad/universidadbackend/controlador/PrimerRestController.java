package com.springsimples.univesidad.universidadbackend.controlador;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restapi")
public class PrimerRestController {

    @RequestMapping("/hola-mundo")
    public String holaMundo(){
        return "Hola mundo";
    }
}
