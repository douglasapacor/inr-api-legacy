-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_act_by_departament;

CREATE PROCEDURE get_act_by_departament (
  departamentsid VARCHAR(500)
)
BEGIN
  SET @sql = CONCAT('
    SELECT
      iddepartamento,
      idato,
      titulo,
      texto,
      ancora,
      secao,
      especie,
      numero,
      vara,
      comarca,
      DATE_FORMAT(datacad, "%d/%m/%Y") AS datacad
    FROM
      ato
    WHERE
      exc = "N"
      AND dt_aprovacao IS NOT NULL
      AND dt_aprovacao != "0000-00-00 00:00:00"
      AND iddepartamento IN (', departamentsid, ')
    ORDER BY
      datacad DESC;
    ');
    PREPARE stmt
    FROM
    @sql;
    EXECUTE stmt;  
    DEALLOCATE PREPARE stmt;
END;