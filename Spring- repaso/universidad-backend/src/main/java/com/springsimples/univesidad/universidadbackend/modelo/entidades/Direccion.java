package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable // no se toma en cuenta esta clase en la base de datos
public class Direccion implements Serializable {
    private String calle;
    private String numero;
    private String codigoPostal;
    private String dpto;
    private String piso;
    private String localidad;

    @Override
    public String toString() {
        return "Direccion{" +
                "calle='" + calle + '\'' +
                ", numero='" + numero + '\'' +
                ", codigoPostal='" + codigoPostal + '\'' +
                ", dpto='" + dpto + '\'' +
                ", piso='" + piso + '\'' +
                ", localidad='" + localidad + '\'' +
                '}';
    }
}
