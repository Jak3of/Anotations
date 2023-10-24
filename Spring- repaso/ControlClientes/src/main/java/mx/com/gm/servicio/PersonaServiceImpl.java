package mx.com.gm.servicio;

import java.util.List;
import mx.com.gm.dao.PersonaDao;
import mx.com.gm.domain.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// implementar PersonaService que lleva todos los metodos de PersonaDao
@Service
public class PersonaServiceImpl implements PersonaService {

    // definir personaDao
    @Autowired
    private PersonaDao personaDao;
    
    @Override
    @Transactional(readOnly = true)
    public List<Persona> listarPersonas() {return (List<Persona>) personaDao.findAll();}

    @Override
    @Transactional
    public void guardar(Persona persona) {
        personaDao.save(persona);
    }

    @Override
    @Transactional
    public void eliminar(Persona persona) {
        personaDao.delete(persona);
    }

    // encontrarPersona por id por lo que no busca por otro atributo
    // transactional solo para lectura y
    // hace que si se ejecuta el metodo con error no cambie la base de datos
    // transactional de springframework.transaction.annotation.Transactional
    // para lecturas es necesario solo poner readOnly = true
    @Override
    @Transactional(readOnly = true)
    public Persona encontrarPersona(Persona persona) {
        return personaDao.findById(persona.getIdPersona()).orElse(null);
    }
}
