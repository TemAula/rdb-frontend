import { map, catchError } from 'rxjs/operators';
import { Eventos } from './eventos.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
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

  create(eventos: Eventos){
    return this.http.post(`${this.baseUrl}/eventos`, eventos);
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/eventos`);
  }

  read(){
    return this.http.get(`${this.baseUrl}/eventos`)
  }

  readById(id: number){
    const url = `${this.baseUrl}/eventos/${id}`;
    return this.http.get<Eventos>(url)
   }

  update(eventos: Eventos): Observable<Eventos>{
    const url = `${this.baseUrl}/eventos/${eventos.id}`;
    return this.http.put<Eventos>(url, eventos);
  }

  delete(id: number){
    const url = `${this.baseUrl}/eventos/${id}`;
    return this.http.delete(url)
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  }
