-- Active: 1729782705461@@inrpublicacoes.mysql.dbaas.com.br@3306
DROP PROCEDURE IF EXISTS get_act_by_departament;

CREATE PROCEDURE get_act_by_departament (
  departamentid INT
)
BEGIN
  SELECT
    idato,
    titulo,
    texto,
    ancora,
    secao,
    especie,
    numero,
    vara,
    comarca,
    DATE_FORMAT(datacad, '%d/%m/%Y') AS datacad
  FROM
    ato
  WHERE
    exc = 'N'
    AND dt_aprovacao IS NOT NULL
    AND dt_aprovacao != '0000-00-00 00:00:00'
    AND iddepartamento = departamentid
  ORDER BY
    datacad DESC;
END;