import { ItemDoacao } from '../itemDoacao.model';
import { ItemDoacaoService } from '../itemDoacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemDoacao-create',
  templateUrl: './itemDoacao-create.component.html',
  styleUrls: ['./itemDoacao-create.component.css']
})

export class ItemDoacaoCreateComponent implements OnInit {

  itemDoacao: ItemDoacao = {
    name: '',
    price: 0
  }

  constructor(private itemDoacaoService: ItemDoacaoService, private router:Router) {

   }

  ngOnInit(): void {
    
  }

  createItemDoacao(): void{
    this.itemDoacaoService.create(this.itemDoacao).subscribe(() => {
      this.itemDoacaoService.showMessage('Item Doação cadastrado!')
      this.router.navigate(['/itemdoacao'])
    })
  }

  cancel(): void{
    this.router.navigate(['/itemdoacao'])
  }
}
