-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_me;

CREATE PROCEDURE get_home_me (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    idmsgeditor AS "id", 
    titulo, 
    img
  FROM msgeditor
  WHERE exc = "N"
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != "0000-00-00 00:00:00"
  AND idmsgeditor IN (', itens, ')
  ORDER BY idmsgeditor DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;
  
  DEALLOCATE PREPARE stmt;
END;