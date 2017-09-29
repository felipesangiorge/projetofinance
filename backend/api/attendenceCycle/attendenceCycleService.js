const AttendenceCycle = require('./attendenceCycle')
const _=require('lodash')

AttendenceCycle.methods(['get','post','put','delete'])
AttendenceCycle.updateOptions({new:true, runValidators:true})

AttendenceCycle.after('post', sendErrorsOrNext).after('put',sendErrorsOrNext)

function sendErrorsOrNext(req,res,next){
  const bundle= res.locals.bundle

  if(bundle.errors){
    var errors= parseErrors(bundle.errors)
    res.status(500).json({errors})
  }else{
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

AttendenceCycle.route('count',function (req,res,next) {
  AttendenceCycle.count(function (error,value) {
    if(error){
      res.status(500).json({errors:[error]})
    }else{
      res.json({value})
    }
  })

})

module.exports = AttendenceCycle
