const express = require('express')

module.exports = function(server){

    //API ROUTERS
    const router = express.Router()
    server.use('/api',router)
}
