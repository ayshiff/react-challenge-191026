<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\CursusRepository")
 */
class Cursus
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $cursus;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCursus(): ?string
    {
        return $this->cursus;
    }

    public function setCursus(string $cursus): self
    {
        $this->cursus = $cursus;

        return $this;
    }
}
