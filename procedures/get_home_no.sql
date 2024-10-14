-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_no;

CREATE PROCEDURE get_home_no(itens VARCHAR(300))
BEGIN
  SET
  @sql = CONCAT('
  SELECT 
    idnoticia AS "id", 
    titulo, img 
  FROM noticia 
  WHERE legado = "N" 
  AND exc = "N" 
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != "0000-00-00 00:00:00" 
  AND idnoticia IN (', 
  itens, 
  ') ORDER BY idnoticia DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;
END;