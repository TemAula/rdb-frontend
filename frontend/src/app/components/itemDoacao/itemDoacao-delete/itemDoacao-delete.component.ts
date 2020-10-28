import { Router, ActivatedRoute } from '@angular/router';
import { ItemDoacaoService } from '../itemDoacao.service';
import { ItemDoacao } from '../itemDoacao.model';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-itemDoacao-delete',
  templateUrl: './itemDoacao-delete.component.html',
  styleUrls: ['./itemDoacao-delete.component.css']
})
export class ItemDoacaoDeleteComponent implements OnInit {

  itemDoacao: ItemDoacao;
  private id: number;
  
  
  constructor(
    private itemDoacaoService: ItemDoacaoService, 
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.itemDoacaoService.readById(getParam.id).subscribe((itemDoacao: any) =>{
        this.itemDoacao = itemDoacao;
      });
      this.id = getParam.id;
    }, erro =>{
      console.log('Erro ao pegar ID', erro)
    })
  }

  deleteItemDoacao(): void{
    this.itemDoacaoService.delete(this.id).subscribe(() => {
      this.itemDoacaoService.showMessage('Item Doação deletado com sucesso!');
      this.router.navigate(['/itemdoacao'])
    }, errow =>{
      this.itemDoacaoService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void{
    this.router.navigate(['/itemdoacao']);
  }
}
