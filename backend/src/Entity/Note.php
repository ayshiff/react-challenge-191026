<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"notes", "students", "teachers", "users", "promos", "cursus", "subjects"}},
 *     denormalizationContext={"groups"={"notes", "students", "teachers", "users", "promos", "cursus", "subjects"}},
 *     collectionOperations={
 *         "get",
 *         "post"={"security"="is_granted('ROLE_ADMIN') or is_granted('ROLE_TEACHER')"}
 *     },
 *     itemOperations={
 *         "get",
 *         "put"={"security"="is_granted('ROLE_ADMIN') or object.teacher.user == user"}
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"notes", "students", "promos"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=1)
     * @Groups({"notes", "students", "promos"})
     */
    private $note;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Student", inversedBy="notes")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("notes")
     */
    private $student;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Teacher")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"notes", "students"})
     */
    private $teacher;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Subject")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"notes", "students", "promos"})
     */
    private $subject;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(string $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getStudent(): ?student
    {
        return $this->student;
    }

    public function setStudent(?student $student): self
    {
        $this->student = $student;

        return $this;
    }

    public function getTeacher(): ?teacher
    {
        return $this->teacher;
    }

    public function setTeacher(?teacher $teacher): self
    {
        $this->teacher = $teacher;

        return $this;
    }

    public function getSubject(): ?subject
    {
        return $this->subject;
    }

    public function setSubject(?subject $subject): self
    {
        $this->subject = $subject;

        return $this;
    }
}
