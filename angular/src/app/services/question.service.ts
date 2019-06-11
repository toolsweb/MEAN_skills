import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Question } from '../models/Question';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/questions";
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) 
  {

  }
  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Questions')),
        catchError(this.handleError('getQuestions', []))
      );
  }
  
  getQuestion(id: number): Observable<Question> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Question>(url).pipe(
      tap(_ => console.log(`fetched Question id=${id}`)),
      catchError(this.handleError<Question>(`getQuestion id=${id}`))
    );
  }
  
  addQuestion (question): Observable<Question> {
    console.log(question);
    return this.http.post<Question>(apiUrl, question, httpOptions).pipe(
      tap((question: Question) => console.log(`added Question w/ id=${question._id}`)),
      catchError(this.handleError<Question>('addQuestion'))
    );
  }
  
  updateQuestion (id, question): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, question, httpOptions).pipe(
      tap(_ => console.log(`updated Question id=${id}`)),
      catchError(this.handleError<any>('updateQuestion'))
    );
  }
  
  deleteQuestion(id): Observable<Question> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Question>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Question id=${id}`)),
      catchError(this.handleError<Question>('deleteQuestion'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
