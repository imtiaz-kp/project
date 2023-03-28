import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { User } from './model/user';
import { Observable } from 'rxjs';
import { first,catchError } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://localhost:3000/";
  httpOptions: {headers:HttpHeaders} ={
    headers:new HttpHeaders({"content-Type":"application/json" }),
  };

  constructor(private http: HttpClient,private errorHandlerService : ErrorHandlerService ) { }

  signup(user: Omit<User,"id">): Observable<User> {

  return this.http.post<User>(`${this.url}api/signup`,user,this.httpOptions).pipe(
    first(),
    catchError(this.errorHandlerService.handleError<User>("signup"))
  );
 }

}
