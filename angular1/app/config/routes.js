angular.module('financeApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
    $stateProvider.state('dashboard',{
      url:"/dashboard",
      templateUrl:"dashboard/dashboard.html"
    }).state('billingCycle',{
      url:"/billingCycles?page",
      templateUrl:'../billingCycle/tabs.html'
    })

    $urlRouterProvider.otherwise('/dashboard')
  }])

.run([
  '$rootScope',
  '$http',
  '$location',
  '$window',
  'auth',
  function ($rootScope,$http,$location,$window,auth) {
      validateUser()
      $rootScope.$on('$locationChangeStart',() => validateUser())

      function validateUser() {
        console.log('Executando...')
      }
  }
])
