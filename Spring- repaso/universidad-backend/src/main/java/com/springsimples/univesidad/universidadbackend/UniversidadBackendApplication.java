package com.springsimples.univesidad.universidadbackend;

import com.springsimples.univesidad.universidadbackend.modelo.entidades.Alumno;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Direccion;
import com.springsimples.univesidad.universidadbackend.modelo.entidades.Persona;
import com.springsimples.univesidad.universidadbackend.servicios.contratos.AlumnoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class UniversidadBackendApplication {



	public static void main(String[] args) {
		String[] beanDefinitionNames = SpringApplication.run(UniversidadBackendApplication.class, args).getBeanDefinitionNames();
		/*for (String beanDefinitionName : beanDefinitionNames) {
			System.out.println(beanDefinitionName);
		}*/


	}




	/*@Bean
	public CommandLineRunner demo() {
		return args -> {
			*//*Persona alumno = new Alumno(null, "Martin" , "Romero" , "22222222",
					new Direccion( "Calle falase", "125", "9400","","","Junin")
					);
			Persona save = servicio.save(alumno);
			System.out.println( save.toString());*//*

			*//*List<Persona> alumnos = (List<Persona>) servicio.findAll();

			// notacion lambda
			alumnos.forEach(System.out::println);*//*
		};
	}*/

}
