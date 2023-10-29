package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "profesores")
@PrimaryKeyJoinColumn(name = "persona_id")
public class Profesor extends Persona {



    private BigDecimal sueldo;

    @ManyToMany(
        fetch = FetchType.LAZY,
        cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
        }
    )
    @JoinTable(
        name = "profesor_carreras",
        joinColumns = @JoinColumn(name = "profesor_id"),
        inverseJoinColumns = @JoinColumn(name = "carrera_id")
    )
    private Set<Carrera> carreras;

    public Profesor(){
    }

    public Profesor(Integer id, String nombre, String apellidos, String dni, Direccion direccion, BigDecimal sueldo) {
        super(id, nombre, apellidos, dni, direccion);
        this.sueldo = sueldo;
    }

    public BigDecimal getSueldo() {
        return sueldo;
    }

    public void setSueldo(BigDecimal sueldo) {
        this.sueldo = sueldo;
    }


    @Override
    public String toString() {
        return super.toString()+
                "\tProfesor{" +
                "sueldo=" + sueldo +
                ", carreras=" + carreras +
                '}';
    }


}
