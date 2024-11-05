-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes

DROP PROCEDURE IF EXISTS get_jurisprudence_home;

CREATE PROCEDURE get_jurisprudence_home (
  l INT,
  o INT
)
BEGIN
    SELECT
	idjurisprudencia AS 'id',
	titulo,
	ementa,
	img,
	DATE_FORMAT(data_registro, '%d/%m/%Y') AS datacad
    FROM
        jurisprudencia
    WHERE
        legado = 'N'
        AND exc = 'N'
        AND dt_aprovacao IS NOT NULL
        AND dt_aprovacao != '0000-00-00 00:00:00'
    ORDER BY
        idjurisprudencia DESC
    LIMIT l
    OFFSET o;
END;