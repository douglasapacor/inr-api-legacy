-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_content_by_id;

CREATE PROCEDURE get_content_by_id (
  descId INT
)
BEGIN
    SELECT conteudo FROM conteudo WHERE idconteudo = descId;
END;