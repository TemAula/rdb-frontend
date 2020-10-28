import { EventosDeleteComponent } from './components/eventos/eventos-delete/eventos-delete.component';
import { EventosUpdateComponent } from './components/eventos/eventos-update/eventos-update.component';
import { EventosCrudComponent } from './views/eventos-crud/eventos-crud.component';

import { ItemDoacaoDeleteComponent } from './components/itemDoacao/itemDoacao-delete/itemDoacao-delete.component';
import { ItemDoacaoUpdateComponent } from './components/itemDoacao/itemDoacao-update/itemDoacao-update.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ItemDoacaoCrudComponent } from './views/itemDoacao-crud/itemDoacao-crud.component';
import { ItemDoacaoCreateComponent } from './components/itemDoacao/itemDoacao-create/itemDoacao-create.component';
import { EventosCreateComponent } from './components/eventos/eventos-create/eventos-create.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent},
  {
    path:"itemdoacao",
    component: ItemDoacaoCrudComponent
  },
  {
    path:"itemdoacao/create",
    component: ItemDoacaoCreateComponent
  },
  {
    path:"itemdoacao/update/:id",
    component: ItemDoacaoUpdateComponent
  },
  {
    path:"itemdoacao/delete/:id",
    component: ItemDoacaoDeleteComponent
  },
  {
    path:"eventos",
    component: EventosCrudComponent
  },
  {
    path:"eventos/create",
    component: EventosCreateComponent
  }, 
  {
    path:"eventos/update/:id",
    component: EventosUpdateComponent
  },
  {
    path:"eventos/delete/:id",
    component: EventosDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
