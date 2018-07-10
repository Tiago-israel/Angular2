import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[FundoColorido]'
})
export class FundoColoridoDirective {

  @HostBinding("style.backgroundColor") fundo: string;
  @HostBinding("style.color") corTexto: string;

  @HostListener('mouseenter') mudarFundoVermelho() {
    this.fundo = "red";
    this.corTexto = "white";
  }

  @HostListener('mouseleave') mudarFundoBranco() {
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.fundo = "white";
    this.corTexto = "black";
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

}
