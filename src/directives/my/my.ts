import { Directive } from '@angular/core';

/**
 * Generated class for the MyDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[my]' // Attribute selector
})
export class MyDirective {

  constructor() {
    console.log('Hello MyDirective Directive');
  }

}
