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
  baseUrl="http://localhost:3001/eventos";

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

  create(eventos: Eventos): Observable<Eventos>{
    return this.http.post<Eventos>(this.baseUrl, eventos).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Eventos>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Eventos>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
   }

   update(eventos: Eventos): Observable<Eventos>{
    const url = `${this.baseUrl}/${eventos.id}`;
    return this.http.put<Eventos>(url, eventos).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Eventos>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Eventos>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  }
