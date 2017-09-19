(function(){
  angular.module('financeApp').controller('AuthCtrl',[
    '$location',
    'msgs',
    AuthController
  ])
   function AuthController($location,mgs){
     const vm = this

     vm.loginMode= true

     vm.changeMode = () =>vm.loginMode = !vm.loginMode

     vm.login = () =>{
       console.log(`Login...${vm.user.email}`)
     }

     vm.singup = () =>{
       console.log(`singup...${vm.user.email}`)
     }

     vm.getUser = ()=>({name: 'Usuário MOCK', email:'mock@teste.com.br'})
     vm.logout = () =>{
       console.log('Logout...')
     }
   }

})()
