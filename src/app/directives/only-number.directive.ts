import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {

  @HostListener('keydown', ['$event']) mudarFundo(event: KeyboardEvent) {
    debugger
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 8) {
      return;
    }
    return event.preventDefault();
  }

  constructor() { }

}
