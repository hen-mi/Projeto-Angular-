import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from "@angular/router";
import { ProdutoService } from '../produto.service';
import { Produto } from 'produto';

@Component({
  selector: 'app-dynamic-subcategory',
  templateUrl: './dynamic-subcategory.component.html',
  styleUrls: ['./dynamic-subcategory.component.css']
})
export class DynamicSubcategoryComponent implements OnInit {
  produtos: Produto | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }




  @ViewChild('produto', { static: true })
  produto!: ElementRef;

  ngOnInit(): void {

    const data = this.activatedRoute.snapshot.data;
    
    const produto = data.apiData.produto;
    let frase: string = `${produto}`;
    setTimeout(() => { this.ngOnInit() }, 1000 * 0.1)
    this.produto.nativeElement.innerText = frase;
   

  }

  ngAfterViewInit() {

  }
}
