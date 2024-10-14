-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes

DROP PROCEDURE IF EXISTS get_salt;

CREATE PROCEDURE get_salt(IN userLogin VARCHAR(80))
BEGIN
  SELECT 
    us.idusuario_site AS idusuario, 
    c.idstatus_cliente 
  FROM usuario_site us, cliente c
  WHERE 
    c.exc = 'N'
  AND 
    us.exc = 'N'
  AND 
    us.idcliente = c.idcliente
  AND
    (us.email = userLogin OR c.login_antigo = userLogin)
  ORDER BY us.idusuario_site DESC
  LIMIT 1;
END;