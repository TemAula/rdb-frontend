import { ItemDoacao } from '../itemDoacao.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemDoacaoService } from '../itemDoacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemDoacao-update',
  templateUrl: './itemDoacao-update.component.html',
  styleUrls: ['./itemDoacao-update.component.css']
})
export class ItemDoacaoUpdateComponent implements OnInit {

  itemDoacao: ItemDoacao

  constructor(
    private itemDoacaoService: ItemDoacaoService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.itemDoacaoService.readById(id).subscribe(itemDoacao =>{
      this.itemDoacao = itemDoacao;
    });
  }

  updateItemDoacao(): void {
    this.itemDoacaoService.update(this.itemDoacao).subscribe(() =>{
      this.itemDoacaoService.showMessage('Item atualizado com sucesso!')
      this.router.navigate(['/itemDoacao']);
    })
  }

  cancel(): void{
    this.router.navigate(["/itemDoacao"]);
  }
}
