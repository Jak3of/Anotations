package com.springsimples.univesidad.universidadbackend;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


class UniversidadBackendApplicationTests {


	Calculadora calculadora = new Calculadora();

	@Test
	@DisplayName("Suma dos valores")
	void sumaDeValores() {

		// given when then

		// given

		int a = 2;
		int b = 3;

		// when

		int resultado = calculadora.sumar(a, b);

		// then

		int resultadoEsperado = 5;

		assertThat(resultado).isEqualTo(resultadoEsperado);

	}



	@Test
	@DisplayName("Test deprecado")
	@Disabled("Desactivado")
	void testDesactivado() {

	}

	class Calculadora {
		int sumar (int a, int b) {
			return a + b;
		}
	}

}
