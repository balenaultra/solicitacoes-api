'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/request');
const authService = require('../services/auth'); 

//authService.isAdmin?
router.post('/', authService.authorize, controller.post,
(req, res, next) => {    
    router.stream.push_sse(req.decoded.company_cpf_cnpj, "request", { event: req.body });
}); 

router.put('/:id', authService.authorize, controller.put, 
(req, res, next) => {    
    router.stream.push_sse(req.decoded.company_cpf_cnpj, "request", { event: req.body });
}); 
router.get('/', authService.authorize, controller.get);

router.get('/:date', authService.authorize, controller.get);

module.exports = router;