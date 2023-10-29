package com.springsimplespasos.hibernate.entidades;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Getter
@Setter
@Table(name = "entidades")
public class SimpleEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @Column(
            name = "descripcion",nullable = true,unique = true,length = 70
    )
    private String nombre;

    public SimpleEntity(Integer codigo, String nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    public SimpleEntity() {

    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SimpleEntity that = (SimpleEntity) o;
        return Objects.equals(codigo, that.codigo) && Objects.equals(nombre, that.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codigo, nombre);
    }
}
