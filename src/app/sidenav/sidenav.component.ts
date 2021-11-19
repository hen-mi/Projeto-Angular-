import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from 'produto';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  livros = false;
  manga = false;
  ficcie = false;
  fantasia = false;
  horror = false;
  isExpanded = true;
  misterio = false;
  showSubmenu: boolean = false;
  isShowing = false;
  comp = false;
  program = false;
  designgr = false;
  litbr = false;
  litru = false;
  litbrita = false;
  showSubSubMenu: boolean = false;
  classicos = false;
  litas = false;
  gnovel = false;
  hq = false;
  vertigo = false;
  dc = false;
  seinen = false;
  josei = false;
  shounen = false;
  marvel = false;

  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProdutos();
  }
  getProdutos(): void {
    this.produtoService.getProdutos()
.subscribe(produtos => this.produtos = produtos);
  }
}
