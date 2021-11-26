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
    if (id == 'exc  lusivo') {
        res.status(200).send({
            mensagem: 'Listando produto expecifico',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Produto expecifico não encontrado',
            id: id
        })
    }
})

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Alterando dados do produto'
    })
});

// DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deletando um produto'
    })
});

module.exports = router;