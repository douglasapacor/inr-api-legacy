-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_pareceres_by_id;

CREATE PROCEDURE get_pareceres_by_id (pareceresId INT)
BEGIN
    SELECT
        idpareceres AS 'id',
        numero_processo,
        ano_processo,
        numero_parecer,
        ano_parecer,
        ementa,
        texto
    FROM
        pareceres
    WHERE
        legado = 'N'
        AND exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
        AND idpareceres = pareceresId;
END;