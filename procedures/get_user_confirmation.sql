-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_user_confirmation;

CREATE PROCEDURE get_user_confirmation (
  userEmail VARCHAR(100),
  userSenha VARCHAR(200)
)
BEGIN 
  SELECT 
    c.idcliente, 
    c.idstatus_cliente, 
    u.idusuario_site AS idusuario, 
    u.nome, 
    g.idgrupo_site, 
    u.autorizacao_trabalhista,
    u.admin,
    ultimo_login, 
    login_antigo, 
    email_antigo
  FROM usuario_site u, cliente c, grupo_site g 
  WHERE c.exc = 'N'
    AND u.exc = 'N'
    AND u.idcliente = c.idcliente 
    AND c.idgrupo_site = g.idgrupo_site 
    AND u.email = userEmail
    AND u.senha = userSenha
  LIMIT 1;
END;