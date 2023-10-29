package com.springsimplespasos.hibernate.entidades.manytoone;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "personas")
public class Persona implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @Column(nullable = false,length = 15)
    private String nombre;

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Telefono> telefonos;

    // constructor sin lista

    public Persona(Integer codigo, String nombre) {
        this.codigo = codigo;
        this.nombre = nombre;

    }

}
