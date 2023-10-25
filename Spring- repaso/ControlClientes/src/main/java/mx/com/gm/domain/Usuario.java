package mx.com.gm.domain;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
@Data
@Table(name = "usuario")
public class Usuario {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUsuario;

    @NotEmpty
    private String username;

    @NotEmpty
    private String password;

    // mapeo de la clase de usuario a rol

    @OneToMany
    @JoinColumn(name = "id_usuario")
    private List<Rol> roles;

}
