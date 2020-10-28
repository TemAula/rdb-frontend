import { ItemDoacao } from './../itemDoacao.model';
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
  private id: number;

  constructor(
    private itemDoacaoService: ItemDoacaoService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.itemDoacaoService.readById(getParam.id).subscribe((itemDoacao: any) => {
        this.itemDoacao = itemDoacao;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
  }

  updateItemDoacao(): void {
    console.log(this.itemDoacao);
    this.itemDoacaoService.update(this.itemDoacao).subscribe(() =>{
      this.itemDoacaoService.showMessage('Item Doação atualizado com sucesso!')
      this.router.navigate(['/itemdoacao']);
    })
  }

  cancel(): void{
    this.router.navigate(["/itemdoacao"]);
  }
}
