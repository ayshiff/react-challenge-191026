SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema heticchallenge
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema heticchallenge
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `heticchallenge` DEFAULT CHARACTER SET utf8 ;
USE `heticchallenge` ;

-- -----------------------------------------------------
-- Table `heticchallenge`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heticchallenge`.`subject` (
  `idsubject` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idsubject`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heticchallenge`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heticchallenge`.`student` (
  `idstudent` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `note` VARCHAR(1) NOT NULL,
  `subject_idsubject` INT NOT NULL,
  PRIMARY KEY (`idstudent`),
  INDEX `fk_student_subject_idx` (`subject_idsubject` ASC) VISIBLE,
  CONSTRAINT `fk_student_subject`
    FOREIGN KEY (`subject_idsubject`)
    REFERENCES `heticchallenge`.`subject` (`idsubject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;