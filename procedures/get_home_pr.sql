-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_pr;

CREATE PROCEDURE get_home_pr (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    idpergunta AS "id", 
    titulo, 
    img
  FROM pergunta
  WHERE legado = "N"
  AND exc = "N"
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != "0000-00-00 00:00:00"
  AND idpergunta IN (', itens, ')
  ORDER BY idpergunta DESC');

  PREPARE stmt
  FROM
  @sql;

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;
END;