-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_state_classifiers;

CREATE PROCEDURE get_state_classifiers (
    stateId VARCHAR(100)
)
BEGIN
    SELECT 
        idestado, 
        titulo, 
        banner 
    FROM 
        estado 
    WHERE exc = 'N' 
    AND titulo = stateId;
END;