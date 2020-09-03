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

  baseUrl="http://localhost:3001/itemDoacao";

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

  create(itemDoacao: ItemDoacao): Observable<ItemDoacao>{
    return this.http.post<ItemDoacao>(this.baseUrl, itemDoacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ItemDoacao[]>{
    return this.http.get<ItemDoacao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<ItemDoacao>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ItemDoacao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(itemDoacao: ItemDoacao): Observable<ItemDoacao>{
    const url = `${this.baseUrl}/${itemDoacao.id}`;
    return this.http.put<ItemDoacao>(url, itemDoacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<ItemDoacao>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ItemDoacao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
