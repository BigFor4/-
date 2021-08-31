import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private element: ElementRef , private render: Renderer2) {
    element.nativeElement.style.color = 'red';
    //render.setStyle(element.nativeElement, 'color' , 'red')
    //element.nativeElement.style.opacity = 0;
  }
}
