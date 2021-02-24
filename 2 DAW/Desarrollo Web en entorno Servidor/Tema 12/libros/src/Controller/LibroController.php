<?php
namespace App\Controller;

use App\Entity\Libro;
use App\Entity\Editorial;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\EntityTpe;
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
     * @Route("/buscar", name="buscar_libro")
     */

    public function buscar_libro(Request $request)
    {
        $formulario = $this->createFormBuilder()
            ->add('titulo', TextType::class)
            ->add('save', SubmitType::class, ['label' => 'Buscar'])
            ->getForm();
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $titulo = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            /**
             * @var LibroRepository
             * */
            $repositorio = $this->getDoctrine()->getRepository(Libro::class);
            $titulo = $repositorio->buscarLibro($titulo['titulo']);
            return $this->render('buscar_libros.html.twig', [
                'titulo' => $titulo,
                'formulario' => $formulario->createView(),
            ]);
        }

        return $this->render('buscar_libros.html.twig', [
            'titulo' => null,
            'formulario' => $formulario->createView(),
        ]);
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
        return new Response(
            'Editorial con nombre "' . $libro->getIsbn() . '" insertado.'
        );
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
     * @Route("/libro/editar/{isbn}", name="editar")
     */
    public function editar(Request $request, $isbn)
    {
        $repositorio = $this->getDoctrine()->getRepository(Libro::class);
        $libro = $repositorio->find($isbn);

        $formulario = $this->createFormBuilder($libro)
            ->add('isbn', TextType::class)
            ->add('titulo', TextType::class)
            ->add('autor', TextType::class)
            ->add('paginas', IntegerType::class)
            ->add('editorial', EntityType::class, [
                'class' => Editorial::class,
                'choice_label' => 'nombre',
            ])
            ->add('save', SubmitType::class, ['label' => 'Enviar'])
            ->getForm();

        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $contacto = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contacto);
            $entityManager->flush();
            return $this->redirectToRoute('inicio');
        }
        return $this->render('editar_libro.html.twig', [
            'formulario' => $formulario->createView(),
        ]);
    }

    /**
     * @Route("/nuevo", name="nuevo_libro")
     */
    public function nuevo_libro(Request $request)
    {
        $libro = new Libro();
        $formulario = $this->createFormBuilder($libro)
            ->add('isbn', TextType::class)
            ->add('titulo', TextType::class)
            ->add('autor', TextType::class)
            ->add('paginas', IntegerType::class)
            ->add('editorial', EntityType::class, [
                'class' => Editorial::class,
                'choice_label' => 'nombre',
            ])
            ->add('save', SubmitType::class, ['label' => 'Enviar'])
            ->getForm();

        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $contacto = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contacto);
            $entityManager->flush();
            return $this->redirectToRoute('inicio');
        }
        return $this->render('nuevo.html.twig', [
            'formulario' => $formulario->createView(),
        ]);
    }

    /**
     * @Route("/libros/paginas/{paginas}", name="filtrarPaginas")
     */
    public function filtrarPaginas($paginas)
    {
        /*$repositorio = $this->getDoctrine()->getRepository(Libro::class);
         $libro = $repositorio->findBy(['paginas' => $pagina]);*/

        /**
         * @var LibroRepository;
         */
        $repositorio = $this->getDoctrine()->getRepository(Libro::class);
        $resul = $repositorio->paginas($paginas);
        return $this->render(' lista_libros_paginas.html.twig', [
            'paginas' => $resul,
        ]);
    }
}
