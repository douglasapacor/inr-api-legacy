-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_messages_editors_home;

CREATE PROCEDURE get_messages_editors_home (l INT, o INT)
BEGIN
    SELECT
        idmsgeditor AS 'id',
        titulo,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        msgeditor
    WHERE
        exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
    ORDER BY
        idmsgeditor DESC
    LIMIT l
    OFFSET o;
END;