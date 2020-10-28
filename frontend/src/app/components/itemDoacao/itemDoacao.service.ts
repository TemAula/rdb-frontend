import { map, catchError } from 'rxjs/operators';
import { ItemDoacao } from './itemDoacao.model';
import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDoacaoService {  

  baseUrl="http://localhost:3001";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'], 
    });
  }

  create(itemDoacao: ItemDoacao){
    return this.http.post(`${this.baseUrl}/itemdoacao`, itemDoacao)
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/itemdoacao`);
  }

  read(){
    return this.http.get(`${this.baseUrl}/itemdoacao`);
  }

  readById(id: number){
    const url = `${this.baseUrl}/itemdoacao/${id}`;
    return this.http.get<ItemDoacao>(url)
  }

  update(itemDoacao: ItemDoacao){
    const url = `${this.baseUrl}/itemdoacao/${itemDoacao.id}`;
    return this.http.put<ItemDoacao>(url, itemDoacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number){
    const url = `${this.baseUrl}/itemdoacao/${id}`;
    return this.http.delete(url)
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
