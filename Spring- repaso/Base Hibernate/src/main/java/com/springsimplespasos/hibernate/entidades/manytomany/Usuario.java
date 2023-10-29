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
@Table(name = "usuarios")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @Column(length = 20, unique = true, nullable = false)
    private String userName;

    @ManyToMany
    @JoinTable(
            name = "usuarios_publicaciones",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "publicacion_id")
    )
    private List<Publicacion> publicaciones;

    public Usuario(Integer codigo,String userName){
        this.codigo = codigo;
        this.userName = userName;
    }


}
