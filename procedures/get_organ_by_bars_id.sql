-- Active: 1729782705461@@inrpublicacoes.mysql.dbaas.com.br@3306
DROP PROCEDURE IF EXISTS get_organ_by_bars_id;

CREATE PROCEDURE get_organ_by_bars_id (
    barsid INT
)
BEGIN
  SELECT
    b.idbarra_orgao,
    o.titulo
  FROM
    barra_orgao b,
    orgao_ato o
  WHERE
    b.exc = 'N'
    AND b.idorgao = o.idorgao
    AND
  b.idbarra = barsid
  ORDER BY
    b.idbarra_orgao ASC;
END;