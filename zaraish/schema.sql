-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8 ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`user` (
  `userid` INT NOT NULL,
  `username` VARCHAR(65) NULL,
  `useremail` VARCHAR(80) NOT NULL,
  `userpw` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `user email_UNIQUE` (`useremail` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products` (
  `productid` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(60) NOT NULL,
  `productdescription` VARCHAR(450) NOT NULL,
  `produc price` INT NOT NULL,
  `productimg` VARCHAR(450) NOT NULL,
  `productcolor` VARCHAR(70) NOT NULL,
  `product category` VARCHAR(60) NOT NULL,
  `product sub category` VARCHAR(60) NULL,
  `type` VARCHAR(45) NOT NULL,
  `user_userid` INT NOT NULL,
  PRIMARY KEY (`productid`, `user_userid`),
  INDEX `fk_products_user_idx` (`user_userid` ASC) VISIBLE,
  CONSTRAINT `fk_products_user`
    FOREIGN KEY (`user_userid`)
    REFERENCES `zara`.`user` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`help`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`help` (
  `helpid` INT NOT NULL,
  `helpname` VARCHAR(75) NOT NULL,
  `helpdescription` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`helpid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
