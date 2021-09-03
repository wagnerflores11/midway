CREATE DATABASE  IF NOT EXISTS `midway` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `midway`;

DROP TABLE IF EXISTS `tb_product`;

CREATE TABLE `tb_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
   `estoque` int(11) NOT NULL,
   `tamanho` varchar(512) NOT NULL,
  `tipo` varchar(512) NOT NULL,
  `descricao` varchar(512) NOT NULL,
  `dataCadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--

LOCK TABLES `tb_product` WRITE;


DROP TABLE IF EXISTS `tb_nfe`;

CREATE TABLE `tb_nfe` (
  `nfe` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(128) NOT NULL,
   `cpf` int(11) NOT NULL,
  `dataVenda` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`nfe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



LOCK TABLES `tb_nfe` WRITE;
