<?php
namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
class LibroController extends AbstractController
{
    private $libros = [
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
    ];

    /**
     * @Route("/libro/{isbn}", name="libro")
     */
    public function ficha($isbn)
    {
        $libro = null;
        foreach ($this->libros as $lib) {
            if ($lib['isbn'] == $isbn) {
                $libro = $lib;
            }
        }
        return $this->render('ficha_libro.html.twig', [
            'libro' => $libro,
        ]);
    }

    /**
     * @Route("/libros", name="libros")
     */
    public function libros()
    {
        return $this->render('lista_libro.html.twig', [
           'libros' => $this->libros
        ]);
    }
}
