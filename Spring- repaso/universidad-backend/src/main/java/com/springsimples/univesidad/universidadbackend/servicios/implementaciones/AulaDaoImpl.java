package com.springsimples.univesidad.universidadbackend.servicios.implementaciones;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Aula;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.ennumeradores.Pizarron;
import com.springsimples.univesidad.universidadbackend.repositorios.AulaRepository;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.AulaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AulaDaoImpl extends GenericoDaoImpl<Aula, AulaRepository> implements AulaDao {

    @Autowired
    public AulaDaoImpl(AulaRepository repository) {
        super(repository);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Aula> findAulaByPizarron(Pizarron pizarron) {
        return repository.findAulaByPizarron(pizarron);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<Aula> findAulaByPabellon(String pabellon) {
        return repository.findAulaByPabellon(pabellon);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Aula> findAulaByNroAula(Integer nroAula) {
        return repository.findAulaByNroAula(nroAula);
    }
}
