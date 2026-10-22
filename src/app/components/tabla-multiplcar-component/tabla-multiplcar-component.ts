import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplcar-component',
  standalone: false,
  styleUrl: './tabla-multiplcar-component.css',
  templateUrl: './tabla-multiplcar-component.html',
})
export class TablaMultiplcarComponent implements OnInit {
  public numero!: number;
  public resultados! : Array<number>;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router : Router,
    private _cdr: ChangeDetectorRef
  ){

  }
  mostrarTabla(num: number): void{
    this.resultados = [];
    for (let index = 1; index <= 10; index++) {
      const resultado = num * index;
      this.resultados.push(resultado)
    }
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero'])
        this.mostrarTabla(this.numero);
        this._cdr.detectChanges();
      }
    })
  }


}
