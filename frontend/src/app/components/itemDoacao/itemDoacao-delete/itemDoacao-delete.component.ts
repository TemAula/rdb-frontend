import { Router, ActivatedRoute } from '@angular/router';
import { ItemDoacaoService } from '../itemDoacao.service';
import { ItemDoacao } from '../itemDoacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemDoacao-delete',
  templateUrl: './itemDoacao-delete.component.html',
  styleUrls: ['./itemDoacao-delete.component.css']
})
export class ItemDoacaoDeleteComponent implements OnInit {

  itemDoacao: ItemDoacao;
  
  constructor(
    private itemDoacaoService: ItemDoacaoService, 
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemDoacaoService.readById(id).subscribe(itemDoacao => {
      this.itemDoacao = itemDoacao;
    })
  
  }

  deleteItemDoacao(): void{
    this.itemDoacaoService.delete(this.itemDoacao.id).subscribe(() => {
      this.itemDoacaoService.showMessage('Item excluido com sucesso!');
      this.router.navigate(['/itemDoacao']);
    })
  }

  cancel(): void{
    this.router.navigate(['/itemDoacao']);
  }
}
