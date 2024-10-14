-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_jr;

CREATE PROCEDURE get_home_jr (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('SELECT idjurisprudencia AS "id", titulo, img FROM jurisprudencia WHERE legado = "N" AND exc = "N" AND dt_aprovacao IS NOT NULL AND dt_aprovacao != "0000-00-00 00:00:00" AND idjurisprudencia IN (', itens, ') ORDER BY idjurisprudencia DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;
END;