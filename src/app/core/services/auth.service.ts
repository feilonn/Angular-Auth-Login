import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  public signin(dados: { email: string, password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/signin`, dados).pipe(
      map((res) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['admin']);
      }),
      catchError(err => {
        if(err.error.message) {
          return throwError(() => err.error.message);
        }
        return throwError(() => "Falha de comunicação com o servidor :( Tente mais tarde");
      })
    )
  }

  public logout() {
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }
}
