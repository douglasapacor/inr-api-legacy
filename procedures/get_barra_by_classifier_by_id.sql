-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes

DROP PROCEDURE IF EXISTS get_barra_by_classifier_by_id;

CREATE PROCEDURE get_barra_by_classifier_by_id (
    classificadorid INT
)
BEGIN
  SELECT
    b.idbarra,
    bpd.titulo,
    bpd.img,
    bpd.cor,  
    b.ordem
  FROM
    barra b,
    barra_pre_definida bpd
  WHERE
    b.exc = 'N'
  AND 
    b.idpre = bpd.idpre
  AND
    b.idclassificador = classificadorid
  ORDER BY
    bpd.titulo ASC;
END;