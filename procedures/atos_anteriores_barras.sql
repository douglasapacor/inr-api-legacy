-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS atos_anteriores_barras;

CREATE PROCEDURE atos_anteriores_barras (idAto INT)
BEGIN
    SELECT 
        a.idanexo, 
        a.idato, 
        bpd.titulo as barra_titulo, 
        bpd.img, 
        bpd.cor, 
        a.titulo
    FROM 
        ato_anterior_anexo a, 
        barra_pre_definida bpd
    WHERE 
        a.exc = 'N' 
    AND a.idpre = bpd.idpre 
    AND a.idato = idAto
    ORDER BY a.idanexo;
END;