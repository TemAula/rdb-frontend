import { ItemDoacaoService } from '../itemDoacao.service';
import { Component, OnInit } from '@angular/core';
import { ItemDoacao } from '../itemDoacao.model';

@Component({
  selector: 'app-itemDoacao-read',
  templateUrl: './itemDoacao-read.component.html',
  styleUrls: ['./itemDoacao-read.component.css']
})
export class ItemDoacaoReadComponent implements OnInit {

  itemDoacao: ItemDoacao[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private itemDoacaoService: ItemDoacaoService) { }

  ngOnInit(): void {
    this.itemDoacaoService.getAll().subscribe((itemDoacao: any) => { console.log(itemDoacao); this.itemDoacao = itemDoacao});
    this.itemDoacaoService.read().subscribe((itemDoacao: any) => {
      this.itemDoacao = itemDoacao;
      console.log(itemDoacao)
    })

  }

}
