(function() {
  'use strict';

  angular
    .module('fandata')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, webDevTec, toastr, fandataApi) {
    var vm = this;

    vm.awesomeThings = [];
    vm.schedule = [];
    vm.classAnimation = '';
    vm.creationDate = 1448400307091;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      getSchedule($log);
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getSchedule() {
      fandataApi.getScheduleCurrent()
        .then(function(response) {
          vm.schedule = response;
          $log.debug(vm.schedule);
        })
        .catch(function(error) {
          $log.error('XHR Failed for getSchedule.\n' + error);
        });
    }
  }
})();
