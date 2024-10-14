-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_clsp;

CREATE PROCEDURE get_home_clsp (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    a.idato AS "id", 
    a.introducao AS "titulo",
    "clsp" AS "img"
  FROM classificador c, barra b, barra_orgao bo, departamento d, ato a
  WHERE c.exc = "N"  
  AND a.exc = "N"  
  AND b.exc = "N"  
  AND bo.exc = "N"  
  AND d.exc = "N"  
  AND a.dt_aprovacao IS NOT NULL 
  AND c.idclassificador = b.idclassificador 
  AND b.idbarra = bo.idbarra 
  AND bo.idbarra_orgao = d.idbarra_orgao 
  AND d.iddepartamento = a.iddepartamento 
  AND c.idestado = 1 
  AND a.dt_aprovacao != "0000-00-00 00:00:00" 
  AND a.idato IN (', itens, ')');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;
  
  DEALLOCATE PREPARE stmt;
END;