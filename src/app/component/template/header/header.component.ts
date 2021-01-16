import { Component, OnInit } from '@angular/core';
import { Marcas } from 'src/app/dados/marcas.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
marcas: Marcas[];

  constructor() { }

  ngOnInit(): void {
  }

}
