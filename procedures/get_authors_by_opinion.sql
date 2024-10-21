-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_authors_by_opinion;

CREATE PROCEDURE get_authors_by_opinion (idOpinion INT)
BEGIN
    SELECT
        a.foto,
        a.nome,
        a.curriculo
    FROM
        autor a,
        opiniao_autor mn
    WHERE
        a.idautor = mn.idautor
        AND mn.idopiniao = idOpinion
    ORDER BY
        a.nome;
END;