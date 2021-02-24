<?php
namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
class ContactoController extends AbstractController
{
    private $contactos = [
        [
            'codigo' => 1,
            'nombre' => 'Juan Pérez',
            'telefono' => '966112233',
            'email' => 'juanp@gmail.com',
        ],
        [
            'codigo' => 2,
            'nombre' => 'Ana López',
            'telefono' => '965667788',
            'email' => 'anita@hotmail.com',
        ],
        [
            'codigo' => 3,
            'nombre' => 'María Moreno',
            'telefono' => '965929190',
            'email' => 'maria.mor@gmail.com',
        ],
        [
            'codigo' => 4,
            'nombre' => 'Eva Martín',
            'telefono' => '611223344',
            'email' => 'em2000@gmail.com',
        ],
        [
            'codigo' => 5,
            'nombre' => 'Nora Fuentes',
            'telefono' => '638765432',
            'email' => 'norafuentes@hotmail.com',
        ],
    ];

    /**
     * @Route("/contacto/{codigo}", name="ficha_contacto", requirements={"codigo"="\d+"})
     */
    public function ficha($codigo)
    {
        $contacto = null;
        foreach ($this->contactos as $con) {
            if ($con['codigo'] == $codigo) {
                $contacto = $con;
            }
        }
        return $this->render('ficha_contacto.html.twig', [
            'contacto' => $contacto,
        ]);
    }

    /**
     * @Route("/contacto/{texto}", name="buscar_contacto")
     */
    public function buscar($texto)
    {
        $resultado = array_filter($this->contactos, function ($con) use (
            $texto
        ) {
            return strpos($con['nombre'], $texto) !== false;
        });
        return $this->render('lista_contactos.html.twig', [
            'contactos' => $resultado,
        ]);
    }
}
