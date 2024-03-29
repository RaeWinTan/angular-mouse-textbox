import { HostListener, Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[mousetextbox]'
})

export class AngularMouseTextboxDirective {

  x:number;
  y:number;

  oldChild:any;
  counter:number = 0;
  //activate:boolean = true;
  @Input() textIn:string = '';
  @Input() zindex:number =0;
  @Input('mousetextbox') activate:boolean = false;
  @HostListener('document:mousemove',['$event'])
  mousemove(evt){

    this.x = evt.pageX;
    this.y = evt.pageY;
    let div = this.renderer.createElement('div');
    let text = this.renderer.createText(this.textIn);
      if(this.activate) {
        this.renderer.appendChild(div, text);
        this.renderer.appendChild(this.el.nativeElement, div);
        this.renderer.addClass(div, "mousetextbox");
        this.renderer.setStyle(div, "z-index",this.zindex);
        this.renderer.setStyle(div, "left", this.x+"px");
        this.renderer.setStyle(div, "top", this.y+"px");
        if(this.oldChild !== undefined) {
          this.renderer.removeChild(this.el.nativeElement,this.oldChild);
          this.renderer.appendChild(div,text);
        }
        this.oldChild = div;
      }else{
        if(div !== undefined) this.renderer.setStyle(div, "display", "none");
        if(this.oldChild !== undefined) this.renderer.setStyle(this.oldChild, "display", "none");
      }
  }


  constructor(private el:ElementRef, private renderer: Renderer2 ) {
    console.log(el.nativeElement);
  }

}
