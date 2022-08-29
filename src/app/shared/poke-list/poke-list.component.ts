import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService, //injeção de dependência
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results; // busca a lista dos pokemon
        this.getAllPokemons = this.setAllPokemons; //atribui ela a um get
        // console.log(this.getAllPokemons)
      },
      error => {
        this.apiError = true
      }
    );
  }

  //pega a busca emetida
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter(
      (res: any)  => {
        return !res.name.indexOf(value.toLowerCase());
      })
      this.getAllPokemons = filter;
  }

}
