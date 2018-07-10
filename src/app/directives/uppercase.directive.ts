import { Directive, HostListener, Renderer, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[Uppercase]'
})
export class UppercaseDirective {

  @HostBinding("style.textTransform") text: string;
  @HostBinding("style.backgroundColor") fundo: string;
  @HostBinding("style.color") cor: string;

  @HostListener('keyup') mudarFundo() {
    this.text = "uppercase";
  }
  @HostListener('focus') colorirFundoAoGanharOfoco() {
    this.fundo = "white";
    this.cor = "black";
  }

  @HostListener('focusout') colorirFundoAoPerderOfoco() {
    this.fundo = "blue";
    this.cor = "white";
  }
  constructor() { }
}
