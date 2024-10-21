-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_legislation_by_id;

CREATE PROCEDURE get_legislation_by_id (
    idLegislation INT
)
BEGIN
    SELECT
        idlegislacao AS "id",
        titulo,
        resumo,
        introducao,
        comentario,
        texto,
        numero_ato,
        anexo,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad,
        destaque
    FROM
        legislacao
    WHERE
        exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
        AND idlegislacao = idLegislation;
END;