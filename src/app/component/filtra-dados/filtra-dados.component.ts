import { Component, OnInit } from '@angular/core';
import { Marcas } from 'src/app/dados/marcas.model';
import { Carros } from 'src/app/dados/carros.model';
import { ApiRequestService } from 'src/app/dados/service/api-request.service';
import { Detalhes } from 'src/app/dados/detalhes.model';
import { Fipe } from 'src/app/dados/fipe.model';

@Component({
  selector: 'app-filtra-dados',
  templateUrl: './filtra-dados.component.html',
  styleUrls: ['./filtra-dados.component.scss']
})
export class FiltraDadosComponent implements OnInit {
  marcas: Marcas[];
  carros: Carros[];
  detalhes: Detalhes[];
  fipe: Fipe[];

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit(): void {
    this.apiRequestService.getMarcas().subscribe(marcas => {
      this.marcas = marcas;
      console.log(marcas);
    })
  }

  getCarrosPorMarca(){
    let idMarca = document.getElementById("marcas").value;
       this.apiRequestService.getCarrosMarca(idMarca).subscribe(carros => {
      this.carros = carros;
    })
  }

  getDetalhesCarro(){
    let idMarca = document.getElementById("marcas").value;
    let idCarro = document.getElementById("carros").value;
       this.apiRequestService.getDetalhesCarro(idMarca, idCarro).subscribe(detalhes => {
      this.detalhes = detalhes;
    })
  }

  getFipe(){
    let idMarca = document.getElementById("marcas").value;
    let idCarro = document.getElementById("carros").value;
    let codFipe = document.getElementById("anos").value;
    this.apiRequestService.getFipe(idMarca, idCarro, codFipe).subscribe(fipe =>{
      this.fipe = fipe
      console.log(fipe);
    })
  }

}
