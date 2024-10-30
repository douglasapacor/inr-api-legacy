-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_opinion_home;

CREATE PROCEDURE get_opinion_home (l INT, o INT)
BEGIN
    SELECT
        o.idopiniao AS "id",
        o.titulo,
        o.resumo,
        DATE_FORMAT(o.datacad, '%d/%m/%Y') AS data_registro,
        DATE_FORMAT(o.datacad, '%d/%m/%Y') AS datacad
    FROM
        opiniao o
    WHERE
        legado = 'N'
        AND o.exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
    ORDER BY
        o.datacad DESC
    LIMIT l
    OFFSET o;
END;