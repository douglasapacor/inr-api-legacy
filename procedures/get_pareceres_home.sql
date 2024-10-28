-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_pareceres_home;

CREATE PROCEDURE get_pareceres_home (
    l INT,
    o INT
)
BEGIN
    SELECT
        idpareceres AS 'id',
        numero_processo,
        ano_processo,
        ementa,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        pareceres
    WHERE
        legado = 'N'
        AND exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
    ORDER BY
        idpareceres DESC
    LIMIT l
    OFFSET o;
END;