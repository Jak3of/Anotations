package com.springsimples.univesidad.universidadbackend.exception;

public class BadRequestException extends RuntimeException {

    public BadRequestException(String message) {
        super( message);
    }
}
