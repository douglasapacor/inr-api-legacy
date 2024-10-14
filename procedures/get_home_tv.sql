-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_tv;

CREATE PROCEDURE get_home_tv (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    idvideo AS "id",
    titulo, 
    img, 
    link,
    numero_programa
  FROM video
  WHERE exc = "N"
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != "0000-00-00 00:00:00"
  AND idvideo IN (', itens, ')
  ORDER BY idvideo DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;
  
  DEALLOCATE PREPARE stmt;
END;