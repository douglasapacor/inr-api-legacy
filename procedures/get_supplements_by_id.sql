DROP PROCEDURE IF EXISTS get_supplements_by_id;

CREATE PROCEDURE get_supplements_by_id (supplementId INT)
BEGIN
    SELECT 
        idsuplemento AS 'id', 
        titulo, 
        texto, 
        introducao, 
        comentario,
        DATE_FORMAT(datacad, '%d/%m/%Y') AS datacad
    FROM 
        suplemento
    WHERE 
        exc = 'N' 
    AND dt_aprovacao IS NOT NULL 
    AND dt_aprovacao != '0000-00-00 00:00:00' 
    AND idsuplemento = supplementId;
END;