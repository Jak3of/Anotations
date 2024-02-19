package com.springsimples.univesidad.universidadbackend.controlador;


import com.springsimples.univesidad.universidadbackend.exception.BadRequestException;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Alumno;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Carrera;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.CarreraDao;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.PersonaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alumnos")
public class AlumnoControlador extends PersonaController {



    private final CarreraDao carreraDao;

    @Autowired
    public AlumnoControlador(@Qualifier("alumnoDaoImpl") PersonaDao alumnoDao, CarreraDao carreraDao) {
        super(alumnoDao);
        nombreEntidad = "alumno";
        this.carreraDao = carreraDao;
    }

    /*@GetMapping
    public List<Persona> obtenerAlumnos(){
        List<Persona> alumnos = (List<Persona>) alumnoDao.findAll();
        if (alumnos.isEmpty()){
            throw new BadRequestException("No existen alumnos");
        }
        return alumnos;
    }

    @GetMapping("/{id}")
    public Persona obtenerAlumnoPorId( @PathVariable Integer id){

        Optional<Persona> oAlumno = alumnoDao.findById(id);
        if (!oAlumno.isPresent()){
            throw new BadRequestException(String.format("El alumno con id %d no existe", id));
        }
        return oAlumno.get();
    }

    @PostMapping
    public Persona crearAlumno(@RequestBody Persona alumno){
        return alumnoDao.save(alumno);
    }*/

    @PutMapping("/{id}")
    public Persona actualizarAlumno( @PathVariable Integer id, @RequestBody Persona alumno){

        Persona alumnoUpdate = null;

        Optional<Persona> oAlumno = service.findById(id);

        if (!oAlumno.isPresent()){
            throw new BadRequestException(String.format("El alumno con id %d no existe", id));
        }

        alumnoUpdate = oAlumno.get();
        alumnoUpdate.setNombre(alumno.getNombre());
        alumnoUpdate.setApellidos(alumno.getApellidos());
        alumnoUpdate.setDireccion(alumno.getDireccion());
        return service.save(alumnoUpdate);
    }

    /*@DeleteMapping("/{id}")
    public void eliminarAlumno(@PathVariable Integer id){

        Optional<Persona> oAlumno = alumnoDao.findById(id);
        if (!oAlumno.isPresent()){
            throw new BadRequestException(String.format("El alumno con id %d no existe", id));
        }
        alumnoDao.deleteById(id);
        System.out.println( "Alumno con id " + id +"  eliminado");
    }*/

    @PutMapping("/{id}/carrera/{idCarrera}")
    public Persona asignarCarreraAlumno(@PathVariable Integer id, @PathVariable Integer idCarrera){

        Optional<Persona> oAlumno = service.findById(id);
        if (!oAlumno.isPresent()){
            throw new BadRequestException(String.format("El alumno con id %d no existe", id));
        }

        Optional<Carrera> oCarrera = carreraDao.findById(idCarrera);
        if (!oCarrera.isPresent()){
            throw new BadRequestException(String.format("La carrera con id %d no existe", idCarrera));
        }

        Persona alumno = oAlumno.get();
        Carrera carrera = oCarrera.get();

        // ((Alumno)alumno) se llama para convertir el objeto de tipo Persona a un objeto de tipo Alumno
        ((Alumno)alumno).setCarrera(carrera);

        return service.save(alumno);
    }



}
