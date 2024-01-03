package com.springsimples.univesidad.universidadbackend.controlador;

import com.springsimples.univesidad.universidadbackend.exception.BadRequestException;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carrera")
public class CarreraControlador extends GenericController<Carrera, CarreraDao> {


    @Autowired
    public CarreraControlador(CarreraDao service) {
        super(service);
        nombreEntidad = "Carrera";
    }



    @GetMapping("/{id}")
    public Carrera obtenerCarreraPorId( @PathVariable Integer id){ // recogemos el id de la url mediante el @PathVariable({id})
        Optional<Carrera> oCarrera = service.findById(id);
        if (oCarrera.isPresent()){
            // String format utiliza %s para el primer argumento y %d para el segundo argumento a la derecha
            throw new BadRequestException(String.format("La carrera con id %d no existe", id));
        }
        return oCarrera.get();
    }


    @PostMapping("/nueva")
    public Carrera crearCarrera(@RequestBody Carrera carrera){ // recogemos el objeto mediante el @RequestBody
        if (carrera.getCantidadAnios() < 0 ){
           throw new BadRequestException("La cantidad de anios debe ser mayor o igual que 0");
        } if (carrera.getCantidadMaterias() < 0){
            throw new BadRequestException("La cantidad de materias debe ser mayor o igual que 0");
        }else {
            return service.save(carrera);
        }
    }

    @PutMapping("/actualizar/{id}")
    public Carrera actualizarCarrera( @PathVariable Integer id, @RequestBody Carrera carrera){

        Carrera carreraUpdate;

        Optional<Carrera> oCarrera = service.findById(id);
        if (!oCarrera.isPresent()){
            throw new BadRequestException(String.format("La carrera con id %d no existe", id));
        } else {
            carreraUpdate = oCarrera.get();
            carreraUpdate.setCantidadAnios(carrera.getCantidadAnios());
            carreraUpdate.setCantidadMaterias(carrera.getCantidadMaterias());
            return service.save(carreraUpdate);
        }

    }

    @DeleteMapping("/borrar/{id}")
    public void borrarCarrera(@PathVariable Integer id){
        Optional<Carrera> oCarrera = service.findById(id);
        if (!oCarrera.isPresent()){
            throw new BadRequestException(String.format("La carrera con id %d no existe", id));
        } else {
            service.deleteById(id);
            System.out.println( "La carrera con id " + id + " ha sido borrada");
        }
    }


}
