package com.springsimplespasos.conceptosbasicos.usoyaml;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@PropertySource(value = "classpath:servidor.yml", factory = YamlPropertySourceFactory.class)
@ConfigurationProperties(prefix = "servidor")
public class ReadYaml {

    private Map<String, String> applicacion;
    private Map<String, List<String>> configuracion;

    private Map<String, Usuario> usuarios;

    public ReadYaml() {

    }

    public Map<String, String> getApplicacion() {
        return applicacion;
    }

    public void setApplicacion(Map<String, String> applicacion) {
        this.applicacion = applicacion;
    }

    public Map<String, List<String>> getConfiguracion() {
        return configuracion;
    }

    public void setConfiguracion(Map<String, List<String>> configuracion) {
        this.configuracion = configuracion;
    }

    public Map<String, Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Map<String, Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
