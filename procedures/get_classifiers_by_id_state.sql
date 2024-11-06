-- Active: 1728923473005@@inrpublicacoes.mysql.dbaas.com.br@3306@inrpublicacoes
DROP PROCEDURE IF EXISTS get_classifiers_by_id_state;

CREATE PROCEDURE get_classifiers_by_id_state (
    stateId INT,
    l INT,
    o INT
)
BEGIN
    SELECT
        DISTINCT c.idclassificador AS 'id',
        DATE_FORMAT(a.datacad, '%d/%m/%Y') AS datacad,
        a.datacad AS data_ordem
    FROM
        classificador c,
        ato a,
        departamento d,
        barra_orgao bo,
        barra b
    WHERE
        a.iddepartamento = d.iddepartamento
        AND d.idbarra_orgao = bo.idbarra_orgao
        AND bo.idbarra = b.idbarra
        AND b.idclassificador = c.idclassificador
        AND c.exc = 'N'
        AND a.exc = 'N'
        AND c.idestado = stateId
        AND a.dt_aprovacao IS NOT NULL
        AND a.dt_aprovacao != '0000-00-00 00:00:00'
        AND YEAR(a.datacad) >= 2017
    ORDER BY
        data_ordem DESC
    LIMIT l
    OFFSET o;
END;