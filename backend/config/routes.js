const express = require('express')
const auth = require('./auth')

module.exports = function(server){

    /* Rotas abertas */
    const openApi = express.Router()
    server.use('/oapi',openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login',AuthService.login)
    openApi.post('/singup',AuthService.singup)
    openApi.post('/validateToken',AuthService.validateToken)

    //API ROUTERS
    const router = express.Router()
    server.use('/api',router)

    //Rotas da api
    const billingCycleService= require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router,'/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummary')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
    }
