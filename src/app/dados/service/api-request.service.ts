import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Marcas } from "../marcas.model";
import { Carros } from "../carros.model";
import { Detalhes } from "../detalhes.model";
import { Fipe } from "../fipe.model";


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

 urlGetMarcas = "http://fipeapi.appspot.com/api/1/carros/marcas.json";
 urlGetCarros = "http://fipeapi.appspot.com/api/1/carros/veiculos/";
 urlGetDetalhes = "http://fipeapi.appspot.com/api/1/carros/veiculo/";
 urlGetFipe = "";

  constructor(private http: HttpClient) { }
getMarcas(){
return this.http.get<Marcas[]>(this.urlGetMarcas)

}
getCarrosMarca(idMarca){
return this.http.get<Carros[]>((this.urlGetCarros + idMarca + ".json"));
}

getDetalhesCarro(idMarca, idCarro){
return this.http.get<Detalhes[]>((this.urlGetDetalhes + idMarca + "/" + idCarro + ".json"));
}

getFipe(idMarca, idCarro,codFipe){
  return this.http.get<Fipe[]>((this.urlGetFipe + idMarca + "/" + idCarro + + "/" + codFipe + ".json"));
}

}
 