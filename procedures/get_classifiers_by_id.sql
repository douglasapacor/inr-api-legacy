-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes

DROP PROCEDURE IF EXISTS get_classifiers_by_id;

CREATE PROCEDURE get_classifiers_by_id (
    classificadorid INT
)
BEGIN
  SELECT
    c.idclassificador AS 'id',
    e.idestado,
    e.titulo AS sigla,
    DATE_FORMAT(a.datacad, '%d/%m/%Y') AS datacad,
    CONCAT( 'Classificadores INR ' , e.titulo , ' - ' , DATE_FORMAT(a.datacad, '%d/%m/%Y') ) AS titulo
  FROM
    classificador c,
    estado e,
    ato a,
    departamento d,
    barra b,
    barra_orgao o
  WHERE
    c.exc = 'N'
    AND 
        a.exc = 'N'
    AND 
        a.iddepartamento = d.iddepartamento
    AND
        d.idbarra_orgao = o.idbarra_orgao
    AND
        o.idbarra = b.idbarra
    AND 
        b.idclassificador = c.idclassificador
    AND
        c.idclassificador = classificadorid
    AND
        c.idestado = e.idestado
  LIMIT 1;
END;