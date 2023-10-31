package com.springsimples.univesidad.universidadbackend.repositorios;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Aula;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AulaRepository extends CrudRepository<Aula, Integer> {



    @Query("select a from Aula a where a.pizarron = ?1")
    Iterable<Aula> findAulaByPizarron( Pizarron pizarron );


    @Query("select a from Aula a join fetch a.pabellon p where p.nombre like %?1%")
    Iterable<Aula> findAulaByPabellon(String pabellon);

    @Query("select a from Aula a where a.nroAula = ?1")
    Optional<Aula> findAulaByNroAula(Integer nroAula);


}
