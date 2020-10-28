import { ItemDoacaoReadComponent } from './components/itemDoacao/itemDoacao-read/itemDoacao-read.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import{ MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ItemDoacaoCrudComponent } from './views/itemDoacao-crud/itemDoacao-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ItemDoacaoCreateComponent } from './components/itemDoacao/itemDoacao-create/itemDoacao-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule }from '@angular/common/http';

import { FormsModule }from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'; 


import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ItemDoacaoUpdateComponent } from './components/itemDoacao/itemDoacao-update/itemDoacao-update.component';
import { ItemDoacaoDeleteComponent } from './components/itemDoacao/itemDoacao-delete/itemDoacao-delete.component';
import { EventosCrudComponent } from './views/eventos-crud/eventos-crud.component';
import { EventosCreateComponent } from './components/eventos/eventos-create/eventos-create.component';
import { EventosDeleteComponent } from './components/eventos/eventos-delete/eventos-delete.component';
import { EventosReadComponent } from './components/eventos/eventos-read/eventos-read.component';
import { EventosUpdateComponent } from './components/eventos/eventos-update/eventos-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ItemDoacaoCrudComponent,
    RedDirective,
    ForDirective,
    ItemDoacaoCreateComponent,
    ItemDoacaoReadComponent,
    ItemDoacaoUpdateComponent,
    ItemDoacaoDeleteComponent,
    EventosCrudComponent,
    EventosCreateComponent,
    EventosDeleteComponent,
    EventosReadComponent,
    EventosUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
