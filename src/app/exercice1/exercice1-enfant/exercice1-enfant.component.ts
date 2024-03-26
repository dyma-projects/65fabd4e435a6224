import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() result_value: number;

  @Output() value: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  increment(): void {
    this.value.emit(1);
  }

  decrement(): void {
    this.value.emit(-1);
  }
}
