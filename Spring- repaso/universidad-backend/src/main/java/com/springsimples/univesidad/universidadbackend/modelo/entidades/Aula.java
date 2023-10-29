package com.springsimples.univesidad.universidadbackend.modelo.entidades;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;


@Getter
@Setter
@Entity
@Table(name = "aulas")
public class Aula implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "numero_aula", nullable = false)
    private Integer nroAula;

    @Column(name = "medidas_mtsxmts", nullable = false)
    private String medidas;

    @Column(name = "cantidad_pupitres")
    private Integer cantidadPupitres;

    @Column(name = "tipo_pizarron")
    @Enumerated(EnumType.STRING)
    private Pizarron pizarron;

    @Column(name = "fecha_alta")
    private LocalDateTime fechaAlta;

    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;

    @ManyToOne(
            optional = true,
            cascade ={
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            fetch = FetchType.LAZY
    )
    @JoinColumn(name = "pabellon_id",
    foreignKey = @ForeignKey(name = "FK_PABELLON_A_ID"))
    private Pabellon pabellon;


    public Aula(){

    }

    public Aula(Integer id, Integer nroAula, String medidas, Integer cantidadPupitres, Pizarron pizarron, LocalDateTime fechaAlta, LocalDateTime fechaModificacion) {
        this.id = id;
        this.nroAula = nroAula;
        this.medidas = medidas;
        this.cantidadPupitres = cantidadPupitres;
        this.pizarron = pizarron;
        this.fechaAlta = fechaAlta;
        this.fechaModificacion = fechaModificacion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Aula aula = (Aula) o;
        return Objects.equals(id, aula.id) && Objects.equals(nroAula, aula.nroAula);
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

    @Override
    public int hashCode() {
        return Objects.hash(id, nroAula);
    }

    @Override
    public String toString() {
        return "Aula{" +
                "id=" + id +
                ", nroAula=" + nroAula +
                ", medidas='" + medidas + '\'' +
                ", cantidadPupitres=" + cantidadPupitres +
                ", pizarron=" + pizarron +
                ", fechaAlta=" + fechaAlta +
                ", fechaUltimaModificacion=" + fechaModificacion +
                '}';
    }
}
