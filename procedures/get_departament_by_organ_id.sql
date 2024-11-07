-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_departament_by_organ_id;

CREATE PROCEDURE get_departament_by_organ_id (
    organsid VARCHAR(500)
)
BEGIN
  SET @sql = CONCAT('
    SELECT
      d.idbarra_orgao, 
      d.iddepartamento, 
      dep.nome
    FROM 
      departamento d, 
      departamento_pre_definido dep
    WHERE
      d.exc = "N"
    AND 
      d.idbarra_orgao IN (', organsid, ')
    AND 
      d.idpre = dep.idpre
    ORDER BY
      d.iddepartamento;
  ');
  PREPARE stmt
  FROM
  @sql;
  EXECUTE stmt;  
  DEALLOCATE PREPARE stmt;
END;