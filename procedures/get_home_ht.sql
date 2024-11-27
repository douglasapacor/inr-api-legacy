-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_ht;

CREATE PROCEDURE get_home_ht(itens VARCHAR(300))
BEGIN
  SET 
  @sql = CONCAT('
    SELECT
        h.idhistoria AS "id",
        h.titulo,
        h.img 
    FROM
        historia h
    WHERE
        `exec` = "N"
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != "0000-00-00 00:00:00"
        AND idhistoria IN (', itens, ')
    ORDER BY
        idhistoria DESC;  
  ');

  PREPARE stmt
  FROM 
  @sql;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END;