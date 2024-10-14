-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_allowed_product;

CREATE PROCEDURE get_allowed_product (
    idCliente INT,
    idProd INT
)
BEGIN
    SELECT
        idproduto
    FROM
        cliente_produto
    WHERE
        idproduto = idProd
        AND idcliente = idCliente;
END;