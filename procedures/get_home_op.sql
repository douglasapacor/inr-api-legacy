-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_op;

CREATE PROCEDURE get_home_op (
  itens VARCHAR(300)
)
BEGIN
  SET @sql = CONCAT('
  SELECT 
    o.idopiniao as "id", 
    o.titulo, 
    o.img,
    (
      SELECT 
        a.nome 
      FROM autor a, opiniao_autor mn 
      WHERE a.idautor = mn.idautor 
      AND mn.idopiniao = o.idopiniao 
      LIMIT 1
    ) AS nome
  FROM opiniao o
  WHERE legado = "N"
  AND o.exc = "N"
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != "0000-00-00 00:00:00"
  AND o.idopiniao IN (', itens, ')
  ORDER BY o.idopiniao DESC');

  PREPARE stmt
  FROM 
  @sql;

  EXECUTE stmt;

  DEALLOCATE PREPARE stmt;
END;