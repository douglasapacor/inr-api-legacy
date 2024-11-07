-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_attached_by_act;

CREATE PROCEDURE get_attached_by_act (
  actid VARCHAR(500)
)
BEGIN
  SET @sql = CONCAT('
    SELECT
      idato,
      idanexo,
      nome,
      arquivo
    FROM
      anexo_ato
    WHERE
      exc = "N"
      AND idato IN (', actid,')
    ORDER BY
      idanexo DESC
    LIMIT 1;
  ');
  PREPARE stmt
  FROM
  @sql;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END;