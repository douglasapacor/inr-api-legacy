-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_supplements_by_theme_id;

CREATE PROCEDURE get_supplements_by_theme_id (
    temaId INT,
    l INT,
    o INT
)
BEGIN
    SELECT 
        idsuplemento AS 'id', 
        idtema, 
        titulo, 
        datacad,
        DATE_FORMAT(datacad, '%d/%m/%Y') AS datacad_fmt
    FROM 
        suplemento
    WHERE exc = 'N'
        AND dt_aprovacao IS NOT NULL 
        AND dt_aprovacao != '0000-00-00 00:00:00' 
        AND idtema = temaId
    ORDER BY 
        titulo ASC
    LIMIT l
    OFFSET o;        
END;