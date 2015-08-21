import './node_modules/reflect-metadata/Reflect.js';
import './node_modules/zone/lib/zone.js';
import 'es6-shim';
//import { Component, View, bootstrap } from './node_modules/angular2/angular2';

import "angular";
import {Component, View, AsModule, RouteConfig, bootstrap} from "a1atscript";
// import {AsModule, Component, Service, View, bootstrap	} from './node_modules/a1atscript/dist/a1atscript.bundle';

@AsModule('myApp', [])

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