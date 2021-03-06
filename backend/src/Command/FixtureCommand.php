<?php

namespace App\Command;

use App\Entity\Cursus;
use App\Entity\Teacher;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Faker\Factory;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FixtureCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:fixture';

    protected $entityManager;

    protected $faker;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->entityManager = $manager;
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
        $this->createCursus();

        $output->writeln([
            '',
            '============',
            'Fixture Done',
        ]);
    }

    protected function createUsers()
    {
        // admin
        $user = new User();
        $user->setMail('admin@hetic.net');
        $user->setPassword('admin');
        $user->setRoles(['ROLE_ADMIN']);
        $this->entityManager->persist($user);


        // teacher
        $user = new User();
        $user->setMail('eric.priou@hetic.net');
        $user->setPassword('teacher');
        $user->setRoles(['ROLE_TEACHER']);
        $this->entityManager->persist($user);

        $teacher = new Teacher();
        $teacher->setFirstname('Eric');
        $teacher->setLastname('Priou');
        $teacher->setUser($user);
        $this->entityManager->persist($teacher);

        // students
//        for ($i = 1; $i <= 10; $i++) {
//            $firstname = $this->faker->firstName;
//            $lastname = $this->faker->lastName;
//            $user = new User();
//            $user->setMail($firstname.'.'.$lastname.'@hetic.net');
//            $user->setPassword($this->passwordEncoder->encodePassword(
//                $user,
//                'fixture'
//            ));
//            $user->setRoles(['ROLE_STUDENT']);
//            $this->entityManager->persist($user);
//
//            $student = new Student();
//            $student->setFirstname($firstname);
//            $student->setLastname($lastname);
//            $student->setBirthdate($this->faker->dateTime(new \DateTime('2000-01-01')));
//            $student->setUser($user);
//            $this->entityManager->persist($student);
//        }
        $this->entityManager->flush();
    }

    public function createCursus()
    {
        $data = ['WEB', '3D', 'Marketing'];
        foreach ($data as $item) {
            $cursus = new Cursus();
            $cursus->setCursus($item);
            $this->entityManager->persist($cursus);
        }
        $this->entityManager->flush();
    }
}