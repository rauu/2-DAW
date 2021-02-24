<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    /**
     * @Route("/login", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils)
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        return $this->render(
            'login.html.twig',
            array('error' => $error, 'lastUsername' => $lastUsername)
        );
    }

    /**
     * @Route("/administrar", name="administrar") 
     */
    public function administrar()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Acceso restringido a administradores');
        // Resto del código del controlador
    }

    /**
     * @Route("/otro", name="otro")
     */
    public function otroControlador()
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        // Resto del código del controlador
    }
}
