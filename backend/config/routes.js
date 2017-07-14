const express = require('express')

module.exports = function(server){

    //API ROUTERS
    const router = express.Router()
    server.use('/api',router)

    //Rotas da api
    const billingCycleService= require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router,'/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummary')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
    }
