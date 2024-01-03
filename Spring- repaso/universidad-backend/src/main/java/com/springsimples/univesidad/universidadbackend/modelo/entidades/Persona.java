package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "personas")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "tipo"
)
@JsonSubTypes({
    @JsonSubTypes.Type(value = Alumno.class, name = "alumno"),
    @JsonSubTypes.Type(value = Profesor.class, name = "profesor")
})
public abstract class Persona implements Serializable {
    /* abstract : no podra instanciarse pero si hacer uso a sus derivados*/

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length = 60)
    private String nombre;

    @Column(nullable = false,length = 60)
    private String apellidos;

    @Column(nullable = false,length = 10,unique = true)
    private String dni;

    @Column(name = "fecha_alta")
    private LocalDateTime fechaAlta;

    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(
                    name = "codigoPostal", column = @Column(name = "codigo_postal")
            ),
            @AttributeOverride(
                    name = "dpto", column = @Column(name = "departamento")
            )
    })
    private Direccion direccion;


    public Persona() {

    }
    public Persona(Integer id, String nombre, String apellidos, String dni, Direccion direccion) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.direccion = direccion;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", dni='" + dni + '\'' +
                ", fechaAlta=" + fechaAlta +
                ", fechaModificacion=" + fechaModificacion +
                ", direccion=" + direccion +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Persona persona = (Persona) o;
        return Objects.equals(id, persona.id) && Objects.equals(dni, persona.dni);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dni);
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
