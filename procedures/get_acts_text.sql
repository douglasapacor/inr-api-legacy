-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_acts_text;

CREATE PROCEDURE get_acts_text (
  act INT
)
BEGIN
  SELECT
      secao,
      especie,
      numero,
      vara,
      comarca,
      texto
    FROM
      ato
    WHERE
      exc = "N"
      AND dt_aprovacao IS NOT NULL
      AND dt_aprovacao != "0000-00-00 00:00:00"
      AND idato = act
    ORDER BY
      datacad DESC;
END;