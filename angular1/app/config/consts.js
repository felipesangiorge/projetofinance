angular.module('financeApp').constant('consts',{
  appName:"Finance App",
  version:'1.0',
  owner:'Felipe',
  year:'2017',
  site:'#',
  apiUrl:'http://localhost:3003/api',
  oapiUrl:'http://localhost:3003/oapi',
  userKey:'_primeira_app_user'
}).run(['$rootScope','consts',function ($rootScope,consts) {
  $rootScope.consts = consts
}])
