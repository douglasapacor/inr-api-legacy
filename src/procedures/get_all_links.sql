-- Active: 1725460851901@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP FUNCTION IF EXISTS get_all_links;

CREATE PROCEDURE get_all_links ()
BEGIN
  SELECT 
    l.idlink,
    l.tipo, 
    l.id, 
    l.ordem
  FROM link l
  ORDER BY l.ordem;
END;