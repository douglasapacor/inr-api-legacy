-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_temas;

CREATE PROCEDURE get_temas ()
BEGIN
    SELECT 
        idtema, 
        titulo
    FROM 
        tema_suplemento
    WHERE 
        exc = 'N'
    ORDER BY idtema;
END;