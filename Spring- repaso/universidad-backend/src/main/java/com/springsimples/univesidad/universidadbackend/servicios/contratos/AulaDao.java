package com.springsimples.univesidad.universidadbackend.servicios.contratos;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Aula;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AulaDao extends GenericoDao<Aula> {

    Iterable<Aula> findAulaByPizarron( Pizarron pizarron );


    Iterable<Aula> findAulaByPabellon(String pabellon);

    Optional<Aula> findAulaByNroAula(Integer nroAula);

}
