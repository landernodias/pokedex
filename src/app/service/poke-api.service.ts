import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private http: HttpClient // necessario registrar no appModule: HttpClientModule
  ) { }

  get apiListAllPokemons(): Observable<any>{ //observable: observa o que acontece com a requisição
    return this.http.get<any>(this.url).pipe(// faz um get na url
      tap( res => res ), //tap: trás um valor: retorna um objeto
      tap( res => {
        res.results.map( (respokemons: any) => { // pega o results da api e mapeia ele: interando no map e criando novos objetos: retorna um name e uma url:
          this.apiGetPokemons(respokemons.url).subscribe( // pega a url e faz um novo get pegando status
            res => respokemons.status = res
          );
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
