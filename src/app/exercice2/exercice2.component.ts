import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('myInput') inputElement: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit() {}
  showInputValue(): void {
    this.valeur = this.inputElement.nativeElement.value;
  }
}
