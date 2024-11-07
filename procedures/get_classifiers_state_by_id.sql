-- Active: 1729782705461@@inrpublicacoes.mysql.dbaas.com.br@3306
DROP PROCEDURE IF EXISTS get_classifiers_state_by_id;

CREATE PROCEDURE get_classifiers_state_by_id (
    stateId INT
)
BEGIN
    SELECT 
        idestado, 
        titulo, 
        banner 
    FROM 
        estado 
    WHERE exc = 'N' 
    AND idestado = stateId;
END;