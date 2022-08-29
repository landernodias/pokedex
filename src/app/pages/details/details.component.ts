import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(
    private activedRoute: ActivatedRoute,
    private pokeApiPokemons: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activedRoute.snapshot.params['id']; // pego o id do pokemon clicado
    const pokemon = this.pokeApiPokemons.apiGetPokemons(`${this.urlPokemon}/${id}`); // usa o serviço para pegar um poquemon especifico apartir do id
    const name = this.pokeApiPokemons.apiGetPokemons(`${this.urlName}/${id}`); // pega o nome de um pokemom apartir de um id

    // carrega as duas api ao mesmo tempo e retorna e retorna a resposta sem precisar fazer o subscribe individualmente
    return forkJoin([pokemon, name]).subscribe(
      res => {
          this.pokemon = res; // poquemon que foi puchado da api
      }
    )

    return console.log(id);
  }
}
