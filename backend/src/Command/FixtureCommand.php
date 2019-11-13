<?php

namespace App\Command;

use App\Entity\Student;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Faker\Factory;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class FixtureCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:fixture';

    protected $entityManager;

    protected $passwordEncoder;

    protected $faker;

    public function __construct(EntityManagerInterface $manager, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->entityManager = $manager;
        $this->passwordEncoder = $passwordEncoder;
        $this->faker = Factory::create();
        parent::__construct();
    }

    protected function configure()
    {
        $this
            // the short description shown while running "php bin/console list"
            ->setDescription('Creates some data.')

            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command allows you to create some data...')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // outputs multiple lines to the console (adding "\n" at the end of each line)
        $output->writeln([
            'Fixture Creator',
            '============',
            '',
        ]);

        $this->createUsers();

        $output->writeln([
            '',
            '============',
            'Fixture Done',
        ]);
    }

    protected function createUsers()
    {
        for ($i = 1; $i <= 10; $i++) {
            $firstname = $this->faker->firstName;
            $lastname = $this->faker->lastName;
            $user = new User();
            $user->setMail($firstname.'.'.$lastname.'@hetic.net');
            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                'FIXTURE'
            ));
            $this->entityManager->persist($user);

            $student = new Student();
            $student->setFirstname($firstname);
            $student->setLastname($lastname);
            $student->setBirthdate($this->faker->dateTime(new \DateTime('2000-01-01')));
            $student->setUser($user);
            $this->entityManager->persist($student);
        }
        $this->entityManager->flush();
    }
}