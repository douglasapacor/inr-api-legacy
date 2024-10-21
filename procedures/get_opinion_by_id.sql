-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_opinion_by_id;

CREATE PROCEDURE get_opinion_by_id (idOpinion INT)
BEGIN
    SELECT
        o.idopiniao AS "id",
        o.titulo,
        o.texto,
        o.introducao,
        o.img,
        o.comentario,
        DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        opiniao o
    WHERE
        legado = 'N'
        AND o.exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
        AND o.idopiniao = idOpinion;
END;