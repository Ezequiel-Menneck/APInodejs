const express = require('express');
const router = express.Router();


// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Listagem de produtos'
    })
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Produto adicionado',
        produtoCriado: produto
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