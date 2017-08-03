(function () {

  angular.module('financeApp').component('field',{
    bindings:{
      id:'@',
      label:'@',
      grid:'@',
      placeholder:'@',
      type:'@',
    },
    controller: [
      'gridSystem',
      function (gridSystem) {
        this.$onInit = ()=> this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template:`
      <div class="{{ $ctrl.gridClasses }}">
        <div class="form-group">
          <label for="{{ $crtl.id }}">{{ $ctrl.label }}</label>
          <input id="{{ $crtl.id }}" class="form-control" placeholder="{{ $crtl.placeholder }}"
          type="{{ $ctrl.type }}"/>
        </div>
      </div>
      `

  })

})()
