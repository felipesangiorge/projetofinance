(function(){
  angular.module('financeApp').controller('AuthCtrl',[
    '$location',
    'msgs',
    'auth',
    AuthController
  ])
   function AuthController($location,msgs,auth){
     const vm = this

     vm.loginMode= true

     vm.changeMode = () =>vm.loginMode = !vm.loginMode

     vm.login = () =>{
       auth.login(vm.user, err => err ? msgs.addError(err) : msgs.addSuccess('Sucesso!'))
     }

     vm.singup = () =>{
       auth.signup(vm.user, err => err ? msgs.addError(err) : msgs.addSuccess('Sucesso!'))
     }

     vm.getUser = ()=> auth.getUser()
     vm.logout = () =>{
       auth.logout(() => msgs.addSuccess('Sucesso!'))
     }
   }

})()
