import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;
    if (error instanceof HttpErrorResponse){
      const body = error.error;
      errorMessage = `Erro: ${error.url}: ${error.status} - ${error.statusText || ''} ${body}`;
    }else{
      errorMessage = error.message ? error.message : error.toString();
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
