-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP FUNCTION IF EXISTS get_advertising;

CREATE PROCEDURE get_advertising ()
BEGIN
    SELECT 
        idpublicidade, 
        texto, 
        ordem
    FROM publicidade
    WHERE exc = 'N' 
    AND tipo = 'H'
    ORDER BY ordem;
END;