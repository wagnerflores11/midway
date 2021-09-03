const { request } = require('express');
const mysql = require('../database/mysql');



exports.buy = async ( req, res, next ) => {

        try{
                var query = `SELECT * FROM tb_product`;
                var result = await mysql.execute(query, [req.body.nome, req.body.tamanho]);

                if(result.length < 1) {
                    return res.status(409).send({messagem: "Calça em falta no estoque"})
                }
                

                query = `INSERT INTO tb_nfe(item, cpf) VALUES (?,?)`;
                const results = await mysql.execute(query, [ req.body.item, req.body.cpf]);
                
                const response = {
                    product: {
                        mensagem: "Venda realizada com sucesso",
                        nfe: results.insertId,
                    } 
                }         
                return res.status(201).send(response);
        } catch (error) {
            return res.status(500).send({ error: error})
        }
};

exports.search = async (req, res, next) => {
    try {
        let nome = '';
        if (req.query.nome) {
            nome = req.query.nome
        }
        const query = `SELECT * FROM tb_product`;
        const result = await mysql.execute(query)

    const arrayUnicos = new Map();

    result.forEach((id) => {
    if (!arrayUnicos.has(id.dataCadastro)){
        arrayUnicos.set(id.dataCadastro, id);
     }
    });

res.send([...arrayUnicos.values()])

        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};



exports.delete = async (req, res, next) =>  {
    var nfe = req.body.nfe;
    console.log(nfe);
    var sql = `DELETE FROM tb_nfe WHERE nfe=${nfe}`;

    mysql.execute(sql, function(err, result) {
        return res.status(201).send(results);
    })
};