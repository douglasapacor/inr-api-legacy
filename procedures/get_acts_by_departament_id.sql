-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_acts_by_departament_id;

CREATE PROCEDURE get_acts_by_departament_id (
  departamentsid INT
)
BEGIN
  SELECT
      iddepartamento,
      idato,
      titulo,
      ancora,
      secao,
      especie,
      numero,
      vara,
      comarca,
      DATE_FORMAT(datacad, "%d/%m/%Y") AS datacad
    FROM
      ato
    WHERE
      exc = "N"
      AND dt_aprovacao IS NOT NULL
      AND dt_aprovacao != "0000-00-00 00:00:00"
      AND iddepartamento = departamentsid
    ORDER BY
      datacad DESC;
END;