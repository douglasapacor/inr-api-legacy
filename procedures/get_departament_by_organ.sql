-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_departament_by_organ;

CREATE PROCEDURE get_departament_by_organ (
    organid INT
)
BEGIN
  SELECT      
      d.iddepartamento, 
      dep.nome
    FROM 
      departamento d, 
      departamento_pre_definido dep
    WHERE
      d.exc = "N"
    AND 
      d.idbarra_orgao = organid
    AND 
      d.idpre = dep.idpre
    ORDER BY
      d.iddepartamento;
END;