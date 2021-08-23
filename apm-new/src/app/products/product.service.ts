import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable()

export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor (private http: HttpClient){

  }
    getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data +> console.log("all" , JSON.stringify(data))),
      catchError(this.handleError)
    );
        private handleError(err: HttpErrorResponse){
          let errorMessage = '';
          if (err.error instanceof ErrorEvent){
            errorMessage = "an error occurred: ${err.error.message}";
          }else {
            errorMessage = 'server returned code: ${err.status}, error message is: ${err.message}';
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        }
    
}