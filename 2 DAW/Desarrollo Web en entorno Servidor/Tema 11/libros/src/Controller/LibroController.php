<?php
namespace App\Controller;

use App\Entity\Libro;
use App\Entity\Editorial;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class LibroController extends AbstractController
{
    /*private $libros = [
        [
            'isbn' => 'A001',
            'titulo' => 'Jarry Choped',
            'autor' => 'JK Bowling',
            'paginas' => 100,
        ],
        [
            'isbn' => 'A002',
            'titulo' => 'El señor de los palillos',
            'autor' => 'JRR TolQuien',
            'paginas' => 200,
        ],
        [
            'isbn' => 'A003',
            'titulo' => 'Los polares de la tierra',
            'autor' => 'Ken Follonett',
            'paginas' => 300,
        ],
        [
            'isbn' => 'A004',
            'titulo' => 'Los juegos de enjambre',
            'autor' => 'Suzanne Collonins',
            'paginas' => 400,
        ],
    ];*/

    /**
     * @Route("/libro/insertar", name="insertar")
     */
    public function insertar()
    {
        $libro = new Libro();
        $libro->setIsbn('A004');
        $libro->setTitulo('Los juegos de enjambre');
        $libro->setAutor('Suzanne Collonins');
        $libro->setPaginas(400);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($libro);
        $entityManager->flush();
        return new Response('Libro insertado con el ISBN ' . $libro->getIsbn());
    }

    /**
     * @Route("/libro/{isbn}", name="libro")
     */
    public function ficha($isbn)
    {
        $repositorio = $this->getDoctrine()->getRepository(Libro::class);
        $libro = $repositorio->find($isbn);
        return $this->render('ficha_libro.html.twig', [
            'libro' => $libro,
        ]);
    }

    /**
     * @Route("/libros", name="libros")
     */
    public function libros()
    {
        $repositorio = $this->getDoctrine()->getRepository(Libro::class);
        $libros = $repositorio->findAll();
        return $this->render('lista_libro.html.twig', [
            'libros' => $libros,
        ]);
    }
    /**
     * @Route("/libro/insertarConEditorial/{editorialNueva}", name="insertarConEditorial")
     */
    public function insertarConEditorial($editorialNueva)
    {
        $editorial = new Editorial();
        $editorial->setNombre($editorialNueva);

        $libro = new Libro();
        $libro->setIsbn('2222BBBB');
        $libro->setTitulo('Libro de prueba con editorial');
        $libro->setAutor('Autor de prueba con editorial');
        $libro->setPaginas(200);
        $libro->setEditorial($editorial);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($libro);
        $entityManager->persist($editorial);
        $entityManager->flush();
        return new Response('Editorial con nombre "' . $libro->getIsbn() . '" insertado.');
    }

    /**
     * @Route("/eliminar/{isbn}", name="eliminarLibro")
     */
    public function eliminarLibro($isbn)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Libro::class);
        $libro = $repositorio->find($isbn);
        if ($libro) {
            $entityManager->remove($libro);
            $entityManager->flush();
        }
        return $this->redirectToRoute('libros');
    }

    /**
     * @Route("/libros/paginas/{paginas}", name="filtrarPaginas")
     */
    public function filtrarPaginas($paginas)
    {
        /*$repositorio = $this->getDoctrine()->getRepository(Libro::class);
         $libro = $repositorio->findBy(['paginas' => $pagina]);*/

        $repositorio = $this->getDoctrine()->getRepository(Libro::class);
        $resul = $repositorio->paginas($paginas);
        return $this->render(' lista_libros_paginas.html.twig', [
            'paginas' => $resul,
        ]);
    }
}
