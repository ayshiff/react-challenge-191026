<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"students", "users", "subjects"}},
 *     denormalizationContext={"groups"={"students", "users", "subjects", "studentsPost"}},
 *     collectionOperations={
 *         "get",
 *         "post"={"security"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *         "get",
 *         "put"={"security"="is_granted('ROLE_ADMIN') or object.user == user"}
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\StudentRepository")
 */
class Student
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"students", "promos"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"students", "promos"})
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"students", "promos"})
     */
    private $lastname;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups("students")
     */
    private $birthdate;

    /**
     * @ORM\Column(type="string", length=1000, nullable=true)
     * @Groups("students")
     */
    private $resume;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("students")
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("students")
     */
    private $link;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"students", "promos"})
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="student", orphanRemoval=true, cascade={"persist"})
     * @Groups({"students", "promos"})
     */
    private $notes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Promo", inversedBy="students")
     * @Groups("studentsPost")
     */
    private $promo;

    public function __construct()
    {
        $this->notes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(\DateTimeInterface $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getResume(): ?string
    {
        return $this->resume;
    }

    public function setResume(?string $resume): self
    {
        $this->resume = $resume;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(user $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    public function addNote(Note $subject): self
    {
        if (!$this->notes->contains($subject)) {
            $this->notes[] = $subject;
            $subject->setStudent($this);
        }

        return $this;
    }

    public function removeNote(Note $subject): self
    {
        if ($this->notes->contains($subject)) {
            $this->notes->removeElement($subject);
            // set the owning side to null (unless already changed)
            if ($subject->getStudent() === $this) {
                $subject->setStudent(null);
            }
        }

        return $this;
    }

    public function getPromo(): ?Promo
    {
        return $this->promo;
    }

    public function setPromo(?Promo $promo): self
    {
        $this->promo = $promo;

        return $this;
    }
}
