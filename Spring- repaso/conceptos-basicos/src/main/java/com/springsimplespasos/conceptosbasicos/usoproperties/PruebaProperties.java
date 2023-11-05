package com.springsimplespasos.conceptosbasicos.usoproperties;

import com.springsimplespasos.conceptosbasicos.usoproperties.herencia.ReadBarProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PruebaProperties implements CommandLineRunner {

    @Autowired
    ReadFooProperties readFooProperties;

    @Autowired
    ReadCommonProperties readCommonProperties;

    @Autowired
    ReadBarProperties readBarProperties;

    @Override
    public void run(String... args) throws Exception {


        System.out.println("Base URL: "+ readCommonProperties.getBaseUrl());
        System.out.println("---------------------------------------------");
        System.out.println("Client URL: "+ readFooProperties.getClientUrl());
        System.out.println("Customer URL: "+ readFooProperties.getCustomerUrl());
        System.out.println("---------------------------------------------");
        System.out.println("Bar Name: "+ readBarProperties.getName());
        System.out.println("Bar Client URL: "+ readBarProperties.getUrl().getClient());
        System.out.println("Bar Customer URL: "+ readBarProperties.getUrl().getCustomer());
        System.out.println("---------------------------------------------");

    }
}
