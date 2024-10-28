-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_question_and_answer_by_id;

CREATE PROCEDURE get_question_and_answer_by_id (questionAndAnswer INT)
BEGIN
    SELECT
        idpergunta AS 'id',
        titulo,
        pergunta,
        resposta,
        texto_parcial,
        comentario,
        numero_pergunta,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        pergunta
    WHERE
        legado = 'N'
        AND exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
        AND idpergunta = questionAndAnswer;
END;