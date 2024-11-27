-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP FUNCTION IF EXISTS get_all_previous_acts;

CREATE PROCEDURE get_all_previous_acts ()
BEGIN
    SELECT 
        idato, 
        tipo, 
        ano
    FROM ato_anterior
    WHERE exc = 'N'
    ORDER BY ano DESC;
END;