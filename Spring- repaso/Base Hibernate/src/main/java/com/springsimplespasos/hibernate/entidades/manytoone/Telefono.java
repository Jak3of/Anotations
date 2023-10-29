package com.springsimplespasos.hibernate.entidades.manytoone;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "telefonos")
public class Telefono implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @Column(nullable = false,length = 10,unique = true)
    private String numero;

    @ManyToOne( fetch = FetchType.LAZY , optional = false)
    @JoinColumn(name = "persona_id", foreignKey = @ForeignKey(name = "FK_PERSONA_ID"),
    referencedColumnName = "codigo")
    private Persona persona;


    public Telefono(Integer codigo, String numero) {
        this.codigo = codigo;
        this.numero = numero;
    }


}
