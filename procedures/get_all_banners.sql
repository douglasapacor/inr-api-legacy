-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP FUNCTION IF EXISTS get_all_banners;

CREATE PROCEDURE get_all_banners ()
BEGIN
  SELECT 
    b.idbanner, 
    b.nome, 
    b.link, 
    b.img, 
    b.texto
  FROM banner b
  WHERE b.exc = 'N'
    AND b.ativo = 'S'
  ORDER BY 
    b.ordem
  LIMIT 10;
END;