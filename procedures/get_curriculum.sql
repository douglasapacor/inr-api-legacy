-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_curriculum;

CREATE PROCEDURE get_curriculum(ids VARCHAR(500))
BEGIN
    SET
        @sql = CONCAT('
        SELECT
            idconteudo AS id,
            titulo AS nome,
            img,
            conteudo
        FROM conteudo_curriculo
        WHERE
            idconteudo IN (', ids, ');
    ');

    PREPARE stmt
    FROM 
    @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END;