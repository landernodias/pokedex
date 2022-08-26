import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private http: HttpClient // necessario registrar no appModule: HttpClientModule
  ) { }

  get apiListAllPokemons(): Observable<any>{ //observable: observa o que acontece com a requisição
    return this.http.get<any>(this.url).pipe(
      tap( res => res ), //tap: trás uma informação por vez
      tap( res => {
        console.log(res);
      })
    )
  }
}
