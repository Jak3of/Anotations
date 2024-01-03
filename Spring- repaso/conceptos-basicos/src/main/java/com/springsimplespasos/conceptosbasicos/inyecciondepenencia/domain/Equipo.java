package com.springsimplespasos.conceptosbasicos.inyecciondepenencia.domain;
import java.time.LocalDate;

public class Equipo {
    private Integer id;
    private String nombre;
    private Integer anio;
    private LocalDate fechaCreacion;

    public Equipo(Integer id, String nombre, Integer anio, LocalDate fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.anio = anio;
        this.fechaCreacion = fechaCreacion;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    @Override
    public String toString() {
        return "Equipo{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", anio=" + anio +
                ", fechaCreacion=" + fechaCreacion +
                '}';
    }
}
