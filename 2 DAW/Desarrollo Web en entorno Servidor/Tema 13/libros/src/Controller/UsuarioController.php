<?php

namespace App\Controller;

use App\Entity\Usuario;
use App\Entity\Editorial;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\EntityTpe;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UsuarioController extends AbstractController
{
    /**
     * @Route("/usuario/nuevo", name="usuario")
     */
    public function nuevo_usuario(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $user = new Usuario();
        $formulario = $this->createFormBuilder($user)
            ->add('login', TextType::class)
            ->add('password', PasswordType::class)
            ->add('email', EmailType::class)
            ->add('rol', TextType::class)

            ->add('save', SubmitType::class, ['label' => 'Enviar'])
            ->getForm();


        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $user = $formulario->getData();
            $passwordCodificado = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($passwordCodificado);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('inicio');
        }
        return $this->render('usuario.html.twig', [
            'formulario' => $formulario->createView(),
        ]);
    }
}
