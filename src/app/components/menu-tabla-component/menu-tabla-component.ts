import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu-tabla-component',
  standalone: false,
  styleUrl: './menu-tabla-component.css',
  templateUrl: './menu-tabla-component.html',
})
export class MenuTablaComponent implements OnInit{
  public numeros!: Array<number>;

  constructor () {
    this.numeros = []
  }
  ngOnInit(): void {
    for(let num = 0; num <5; num++){
      let random = Math.floor(Math.random() * 10);
      while (this.numeros.includes(random)) {
        random = Math.floor(Math.random() * 10);
    }
      this.numeros.push(random)
    }
  }

}
