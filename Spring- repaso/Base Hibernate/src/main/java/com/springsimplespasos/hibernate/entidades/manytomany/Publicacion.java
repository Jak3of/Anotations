package com.springsimplespasos.hibernate.entidades.manytomany;

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
@Table(name = "publicaciones")
public class Publicacion implements Serializable {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @Column(nullable = false)
    private String texto;

    @ManyToMany(mappedBy = "publicaciones")
    private List<Usuario> usuarios;


    public Publicacion(Integer codigo,String texto){
        this.codigo = codigo;
        this.texto = texto;
    }

}
