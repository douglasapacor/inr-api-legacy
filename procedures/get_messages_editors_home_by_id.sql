DROP PROCEDURE IF EXISTS get_messages_editors_home_by_id;

CREATE PROCEDURE get_messages_editors_home_by_id (idMessages INT)
BEGIN
    SELECT
        idmsgeditor AS 'id',
        titulo,
        texto,
        chamada,
        aberto,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        msgeditor
    WHERE
        exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
        AND idmsgeditor = idMessages;
END;