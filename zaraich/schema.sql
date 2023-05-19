-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8mb3 ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`help`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`help` (
  `helpid` INT NOT NULL,
  `helpname` VARCHAR(75) NOT NULL,
  `helpdescription` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`helpid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `zara`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products` (
  `productid` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(60) NOT NULL,
  `productdescription` VARCHAR(450) NOT NULL,
  `productprice` INT NOT NULL,
  `productimg` VARCHAR(450) NOT NULL,
  `productcolor` VARCHAR(70) NOT NULL,
  `productcategory` VARCHAR(60) NOT NULL,
  `productsubcategory` VARCHAR(60) NULL DEFAULT NULL,
  `producttype` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`productid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `zara`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`user` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(65) NULL DEFAULT NULL,
  `useremail` VARCHAR(80) NOT NULL,
  `userpw` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `user email_UNIQUE` (`useremail` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `zara`.`products_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products_has_user` (
  `products_productid` INT NOT NULL,
  `user_userid` INT NOT NULL,
  PRIMARY KEY (`products_productid`, `user_userid`),
  INDEX `fk_products_has_user_user1_idx` (`user_userid` ASC) VISIBLE,
  INDEX `fk_products_has_user_products_idx` (`products_productid` ASC) VISIBLE,
  CONSTRAINT `fk_products_has_user_products`
    FOREIGN KEY (`products_productid`)
    REFERENCES `zara`.`products` (`productid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_user_user1`
    FOREIGN KEY (`user_userid`)
    REFERENCES `zara`.`user` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
