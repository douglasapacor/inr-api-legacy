-- Active: 1729782705461@@inrpublicacoes.mysql.dbaas.com.br@3306
DROP PROCEDURE IF EXISTS get_departament_by_organ_id;

CREATE PROCEDURE get_departament_by_organ_id (
    organid INT
)
BEGIN
  SELECT 
    d.iddepartamento AS 'id', 
    dep.nome
  FROM 
    departamento d, 
    departamento_pre_definido dep
  WHERE
    d.exc = 'N'
  AND 
    d.idbarra_orgao = organid
  AND 
    d.idpre = dep.idpre
  ORDER BY
    d.iddepartamento;
END;