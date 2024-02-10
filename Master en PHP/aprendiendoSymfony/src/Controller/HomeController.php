<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index() : Response 
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'title' => 'Home',
            'body' => 'This is the home page'
        ]);
    }

    public function animales() : Response
    {
        return $this->render('home/animales.html.twig', [
            'title' => 'Animales',
            'animales' => ['Perro', 'Gato', 'Conejo']
        ]);
    }

    public function nombre($nombre , $apellido) : Response
    {
        return $this->render('home/nombre.html.twig', [
            'title' => 'Nombre',
            'nombre' => $nombre,
            'apellido' => $apellido
        ]);
    }

    public function redirigir()
    {
        // return $this->redirectToRoute('index', array() , 301);
        return $this->redirect('https://google.com.pe');
    }
}
