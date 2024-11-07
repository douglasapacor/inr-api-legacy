get_attached_by_act
-- Active: 1729782705461@@inrpublicacoes.mysql.dbaas.com.br@3306
DROP PROCEDURE IF EXISTS get_attached_by_act;

CREATE PROCEDURE get_attached_by_act (
  actid INT
)
BEGIN
  SELECT
    idanexo,
    nome,
    arquivo
  FROM
    anexo_ato
  WHERE
    exc = 'N'
    AND idato = actid
  ORDER BY
    idanexo DESC
  LIMIT 1;
END;