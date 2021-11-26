const express = require('express');
const router = express.Router();
const client = require('../postgres').client;


// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {

    const query = {
        text: "SELECT * FROM public.produtos"
    }

    client.query(query, (err, results) => {
        if (err) {
            return res.status(500).send({
                error: err
            });
        }
        res.status(200).send({
            mensagem: 'Listagem de produtos',
            produtos: results.rows
            
        })
    })
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {

    const query = {
        text: "INSERT INTO public.produtos (nome, preco) VALUES ($1, $2)",
        values: [req.body.nome, req.body.preco]
    }

    client.query(query, (err) => {
        if (err) {
            return res.status(500).send({
                error: err
            })
        }
        res.status(201).send({
            mensagem: 'Produto Adicionado com sucesso'
        })
    })
});

// RETORNA UM PRODUTO EXPECIFICO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    const query = {
        text: `SELECT * FROM public.produtos WHERE id_produto = ${id}`
    }

    client.query(query, (err, result) => {
        if (err) {
            return res.status(500).send({
                error: err
            });
        }
        res.status(200).send({
            produto: result.rows
        })
    })
})

// DELETA UM PRODUTO
router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    const query = {
        text: `DELETE FROM public.produtos WHERE id_produto = ${id}`
    }

    client.query(query, (err, result) => {
        if (err) {
            return res.status(500).send({
                error: err
            });
        }
        res.status(201).send({
            mensagem: 'Deletado com sucesso'
        })
    })
});

module.exports = router;