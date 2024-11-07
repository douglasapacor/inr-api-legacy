-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_organ_by_bars_id;

CREATE PROCEDURE get_organ_by_bars_id (
    barsid VARCHAR(500)
)
BEGIN
  SET @sql = CONCAT('
    SELECT
      b.idbarra,  
      b.idbarra_orgao,
      o.titulo
    FROM
      barra_orgao b,
      orgao_ato o
    WHERE
      b.exc = "N"
      AND b.idorgao = o.idorgao
      AND
    b.idbarra IN (', barsid, ')
    ORDER BY
      b.idbarra_orgao ASC;
  ');
  PREPARE stmt
  FROM
  @sql;
  EXECUTE stmt;  
  DEALLOCATE PREPARE stmt;
END;