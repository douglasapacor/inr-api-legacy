-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_co;

CREATE PROCEDURE get_home_co(itens VARCHAR(300))
BEGIN
  SET 
  @sql = CONCAT('SELECT idcurso AS "id", titulo, img FROM curso WHERE exc = "N" AND dt_aprovacao IS NOT NULL AND dt_aprovacao != "0000-00-00 00:00:00" AND idcurso IN (',itens,') ORDER BY idcurso DESC');

  PREPARE stmt
  FROM 
  @sql;

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;
END;