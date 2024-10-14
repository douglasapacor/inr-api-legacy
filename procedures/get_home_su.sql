-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_home_su;

CREATE PROCEDURE get_home_su (
  itens VARCHAR(300)
)
BEGIN
  SELECT 
    idsuplemento, 
    titulo, 
    img
  FROM suplemento
  WHERE exc = 'N'
  AND dt_aprovacao IS NOT NULL 
  AND dt_aprovacao != '0000-00-00 00:00:00'
  AND idsuplemento IN (itens)
  ORDER BY idsuplemento DESC  
END;