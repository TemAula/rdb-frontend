import { Router, ActivatedRoute } from '@angular/router';
import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { Eventos } from '../eventos.model';

@Component({
  selector: 'app-eventos-delete',
  templateUrl: './eventos-delete.component.html',
  styleUrls: ['./eventos-delete.component.css']
})
export class EventosDeleteComponent implements OnInit {

  eventos: Eventos;
  private id: number;

  constructor(
    private eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.eventosService.readById(getParam.id).subscribe((eventos: any) =>{
        this.eventos = eventos;
      })
      this.id = getParam.id;
    }, erro =>{
      console.log('Erro ao pegar ID', erro);
    });
  }

  deleteEventos(): void{
    this.eventosService.delete(this.id).subscribe(() => {
      this.eventosService.showMessage('Evento deleado com sucesso!');
      this.router.navigate(['/eventos'])
    }, errow => {
      this.eventosService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void{
    this.router.navigate(['/eventos']);
  }

}
