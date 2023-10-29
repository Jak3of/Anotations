package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "carreras")
public class Carrera implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true,length = 80)
    private String nombre;

    @Column(name = "cantidad_materias")
    private Integer cantidadMaterias;

    @Column(name = "cantidad_anios")
    private Integer cantidadAnios;

    @Column(name = "fecha_alta")
    private LocalDateTime fechaAlta;

    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;

    @OneToMany(
        mappedBy = "carrera",
        fetch = FetchType.LAZY
    )
    private Set<Alumno> alumnos;

    @ManyToMany(
        mappedBy = "carreras",
        fetch = FetchType.LAZY
    )
    private Set<Profesor> profesores;


    public Carrera(){

    }

    public Carrera(Integer id, String nombre, Integer cantidadMaterias, Integer cantidadAnios, LocalDateTime fechaAlta, LocalDateTime fechaModificacion) {
        this.id = id;
        this.nombre = nombre;
        this.cantidadMaterias = cantidadMaterias;
        this.cantidadAnios = cantidadAnios;
        this.fechaAlta = fechaAlta;
        this.fechaModificacion = fechaModificacion;
    }

    @Override
    public String toString() {
        return "Carrera{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", cantidadMaterias=" + cantidadMaterias +
                ", cantidadAnios=" + cantidadAnios +
                ", fechaAlta=" + fechaAlta +
                ", fechaUltimaModificacion=" + fechaModificacion +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Carrera carrera = (Carrera) o;
        return Objects.equals(id, carrera.id) && Objects.equals(nombre, carrera.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre);
    }

    @PrePersist
    private void antesdePesistir(){
        this.fechaAlta = LocalDateTime.now();
    }

    @PreUpdate
    private void antesDeUpdate(){
        // se guardara automaticamente las fechas de hoy antes de actualizar y guardar en persist
        this.fechaModificacion = LocalDateTime.now();
    }
}
