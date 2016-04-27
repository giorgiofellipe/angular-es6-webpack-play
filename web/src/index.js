import angular from 'angular';

import { name as App } from './components/app/app';

function onReady() {
  angular.bootstrap(document, [
    App
  ], {
    strictDi: true
  });
}

angular.element(document).ready(onReady);
