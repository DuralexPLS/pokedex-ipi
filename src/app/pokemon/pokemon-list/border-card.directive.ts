import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  intialColor: string = ('#d3d3d3');
  defaultColor: string = ('#009688');
  defaultHeight: number = 200;
  //initialiser les variables pour plus de clareté

  constructor(private element:ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.intialColor);
  }
  //définir les valeurs par défaut avec le constructeur

  @Input('pokemonBorderCard')
    borderColor!: string;
  //alias permet de personnaliser borderColor, dans le template pokemonBorderCard="couleur"


  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.intialColor);
  }
  //Host listener vérifie quand le curseur rentre et sort d'une card

}
