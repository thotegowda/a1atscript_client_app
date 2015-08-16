import './node_modules/reflect-metadata/Reflect.js';
import './node_modules/zone/lib/zone.js';
import { Component, View, bootstrap } from './node_modules/angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
class MyAppComponent {
  constructor() {
    this.name = 'Thote';
  }
}

bootstrap(MyAppComponent);