package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.TipoEmpleado;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;


@Getter
@Setter
@Entity
@Table(name = "empleados")
@PrimaryKeyJoinColumn(name = "persona_id")
public class Empleado extends Persona {

    private BigDecimal sueldo;

    @Column(name = "tipo_empleado")
    @Enumerated(EnumType.STRING)
    private TipoEmpleado tipoEmpleado;

    @OneToOne(
        optional = true,
            cascade = CascadeType.ALL
    )
    @JoinColumn(
        name = "pabellon_id",
        foreignKey = @ForeignKey(
            name = "FK_PABELLON_E_ID"

        )
    )
    private Pabellon pabellon;

    public Empleado(){

    }

    public Empleado(Integer id, String nombre, String apellidos, String dni, Direccion direccion, BigDecimal sueldo, TipoEmpleado tipoEmpleado) {
        super(id, nombre, apellidos, dni, direccion);
        this.sueldo = sueldo;
        this.tipoEmpleado = tipoEmpleado;
    }



    @Override
    public String toString() {
        return super.toString() +
                "\tEmpleado{" +
                "sueldo=" + sueldo +
                ", tipoEmpleado=" + tipoEmpleado +
                '}';
    }
}
