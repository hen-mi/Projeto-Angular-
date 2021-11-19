import { Injectable } from '@angular/core';
import { Produto } from 'produto';
import { PRODUTOS } from 'produtos';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getProdutos(): Observable<Produto[]> {
    const produtos = of(PRODUTOS);
        return produtos;
  }
  getProduto(name: String): Observable<Produto> {
    let produto = PRODUTOS.find(p => p.name === name)!;
    return of(produto);
  }

  constructor() { }
}
