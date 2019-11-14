<?php


namespace App\EventListener;

use App\Entity\Student;
use App\Entity\Teacher;
use App\Entity\User;
use Doctrine\Common\EventSubscriber;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\ORM\Events;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;

class PasswordEncoderSubscriber implements EventSubscriber
{
    protected $passwordEncoder;

    public function __construct(
        UserPasswordEncoderInterface $passwordEncoder
    ) {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::prePersist => 'prePersist'
        ];
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        // if this subscriber only applies to certain entity types,
        // add some code to check the entity type as early as possible
        if ($entity instanceof User) {
            $entity->setPassword($this->passwordEncoder->encodePassword(
                $entity,
                $entity->getPassword() ?? $entity->getUsername()
            ));
        }

        if ($entity instanceof Student) {
            $entity->getUser()->setRoles(['ROLE_STUDENT']);
        }

        if ($entity instanceof Teacher) {
            $entity->getUser()->setRoles(['ROLE_TEACHER']);
        }
    }
}
