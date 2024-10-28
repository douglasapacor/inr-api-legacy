-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_questions_and_answers;

CREATE PROCEDURE get_questions_and_answers (l INT, o INT)
BEGIN
    SELECT
        idpergunta AS 'id',
        titulo,
        numero_pergunta,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        pergunta
    WHERE
        legado = 'N'
        AND exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
    ORDER BY
        idpergunta DESC
    LIMIT l
    OFFSET o;
END;