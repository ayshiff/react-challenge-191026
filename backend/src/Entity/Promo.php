<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"promos", "cursus"}},
 *     denormalizationContext={"groups"={"promos", "cursus"}},
 *     collectionOperations={
 *         "get",
 *         "post"={"security"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *         "get",
 *         "put"={"security"="is_granted('ROLE_ADMIN')"}
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\PromoRepository")
 */
class Promo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("promos")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups("promos")
     */
    private $year;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\cursus")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("promos")
     */
    private $cursus;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getCursus(): ?cursus
    {
        return $this->cursus;
    }

    public function setCursus(?cursus $cursus): self
    {
        $this->cursus = $cursus;

        return $this;
    }
}
