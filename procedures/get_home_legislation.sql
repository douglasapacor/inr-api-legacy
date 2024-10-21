-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_legislation;

CREATE PROCEDURE get_home_legislation (l INT, o INT)
BEGIN
    SELECT
        idlegislacao AS "id",
        titulo,
        resumo,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        legislacao
    WHERE
        exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
    ORDER BY
        idlegislacao DESC
    LIMIT l
    OFFSET o;
END;