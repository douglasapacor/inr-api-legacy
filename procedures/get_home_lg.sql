-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_lg;

CREATE PROCEDURE get_home_lg (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    idlegislacao AS "id", 
    resumo AS "titulo", 
    img
  FROM legislacao
  WHERE exc = "N"
  AND dt_aprovacao IS NOT NULL
  AND dt_aprovacao != "0000-00-00 00:00:00"
  AND idlegislacao IN (',
  itens,
  ')
  ORDER BY idlegislacao DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;
  
  DEALLOCATE PREPARE stmt;
END;