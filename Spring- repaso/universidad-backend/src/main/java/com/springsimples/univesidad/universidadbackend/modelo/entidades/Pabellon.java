package com.springsimples.univesidad.universidadbackend.modelo.entidades;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pabellones")
public class Pabellon implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "metros_cuadrados")
    private Double mts2;

    @Column(name = "nombre_pabellon",unique = true, nullable = false)
    private String nombre;

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

    @Column(name = "fecha_alta")
    private LocalDateTime fechaAlta;

    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;

    @OneToMany(
            mappedBy = "pabellon",
            fetch = FetchType.LAZY
    )
    private Set<Aula> aulas;

    public Pabellon(Integer id, Double mts2, String nombre , Direccion direccion) {
        this.id = id;
        this.mts2 = mts2;
        this.nombre = nombre;
        this.direccion = direccion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pabellon pabellon = (Pabellon) o;
        return Objects.equals(id, pabellon.id) && Objects.equals(nombre, pabellon.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre);
    }

    @Override
    public String toString() {
        return "Pabellon{" +
                "id=" + id +
                ", mts2=" + mts2 +
                ", nombre='" + nombre + '\'' +
                ", direccion=" + direccion +
                ", fechaAlta=" + fechaAlta +
                ", fechaUltimaModificacion=" + fechaModificacion +
                '}';
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
