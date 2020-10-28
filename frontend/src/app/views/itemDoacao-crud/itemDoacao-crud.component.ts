import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-itemDoacao-crud',
  templateUrl: './itemDoacao-crud.component.html',
  styleUrls: ['./itemDoacao-crud.component.css']
})
export class ItemDoacaoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Itens',
      icon: 'storefront',
      routeUrl: '/itemdoacao'
   }
  }


  ngOnInit(): void {

  }

  navigateToItemDoacaoCreate(): void{
    this.router.navigate(['/itemdoacao/create'])
  }
}
