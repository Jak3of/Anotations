package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "alumnos")
@DiscriminatorValue("alumnos")
@PrimaryKeyJoinColumn(name = "persona_id")
public class Alumno extends Persona {

    @ManyToOne(
            optional = true,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name = "carrera_id"
    )
    @JsonIgnoreProperties({"hibernateLazyInitializer", "alumnos"})
    private Carrera carrera;

    public Alumno(){

    }
    public Alumno(Integer id, String nombre, String apellidos, String dni, Direccion direccion) {
        super(id, nombre, apellidos, dni, direccion);
    }

    @Override
    public String toString() {
        return super.toString()+
                "\tAlumno{" +
                "carrera=" + carrera +
                '}';
    }
}
