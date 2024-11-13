-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_attach_by_act_id;

CREATE PROCEDURE get_attach_by_act_id (
  actid INT
)
BEGIN
    SELECT
      idato,
      idanexo,
      nome,
      arquivo
    FROM
      anexo_ato
    WHERE
      exc = "N"
      AND idato = actid
    ORDER BY
      idanexo DESC
    LIMIT 1;
END;