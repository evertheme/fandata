(function() {
  'use strict';

  angular
    .module('fandata')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
