import './node_modules/reflect-metadata/Reflect.js';
import './node_modules/zone/lib/zone.js';
import 'es6-shim';
import 'angular';

import './app.css';

import {Component, View, AsModule, RouteConfig, bootstrap} from "a1atscript";

@AsModule('myApp', [Reflect])

@Component({
  selector: 'app',
  controllerAs: 'vm'
})
@View({
  template: '<h1>Hello {{ vm.name }}</h1>'
})
class MyAppComponent {
  constructor() {
    this.name = 'Thote';
  }
}

bootstrap(MyAppComponent);