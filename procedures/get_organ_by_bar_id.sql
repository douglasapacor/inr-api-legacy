-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_organ_by_bar_id;

CREATE PROCEDURE get_organ_by_bar_id (
    bar INT
)
BEGIN
    SELECT
        b.idbarra_orgao,
        o.titulo
    FROM
        barra_orgao b,
        orgao_ato o
    WHERE b.exc = "N"
        AND b.idorgao = o.idorgao
        AND b.idbarra = bar
    ORDER BY
        b.idbarra_orgao ASC;
END;