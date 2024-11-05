-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_jurisprudence_by_id;

CREATE PROCEDURE get_jurisprudence_by_id (
    idJurisprudence INT
)
BEGIN
    SELECT
        idjurisprudencia AS 'id',
        titulo,
        ementa,
        resumo,
        ato,
        comentario,
        numero_ato,
        dados_processo,
        inteiro_teor,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        jurisprudencia
    WHERE
        legado = 'N'
        AND exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
        AND idjurisprudencia = idJurisprudence;
END;