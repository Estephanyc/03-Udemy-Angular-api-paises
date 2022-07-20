import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
    this.OnDebounce.emit(valor)  
  })
  }

  buscar(){
    this.OnEnter.emit(this.termino)
  }

  teclaPresionada(){
    console.log(this.termino)
    this.debouncer.next(this.termino)
  }

}
