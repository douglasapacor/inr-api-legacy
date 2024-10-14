-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_pa;

CREATE PROCEDURE get_home_pa (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    idpareceres AS "id", 
    ementa AS titulo,
    img,
    numero_processo, 
    ano_processo
  FROM pareceres
  WHERE legado = "N"
  AND exc = "N"
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != "0000-00-00 00:00:00"
  AND idpareceres IN (', 
  itens, 
  ')
  ORDER BY idpareceres DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;
END;