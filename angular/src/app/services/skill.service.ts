import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Skill } from '../models/Skill';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:3000/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[];
  private skillSource = new BehaviorSubject<string>("");
  currentSkill = this.skillSource.asObservable();

  constructor(private http: HttpClient) 
  {

  }

  changeSkill(skill:string)
  {
    this.skillSource.next(skill);
  }

  getSkills (): Observable<Skill[]> {
    return this.http.get<Skill[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Skills')),
        catchError(this.handleError('getSkills', []))
      );
  }
  
  getSkill(id: number): Observable<Skill> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Skill>(url).pipe(
      tap(_ => console.log(`fetched Skill id=${id}`)),
      catchError(this.handleError<Skill>(`getSkill id=${id}`))
    );
  }
  
  addSkill (Skill): Observable<Skill> {
    return this.http.post<Skill>(apiUrl, Skill, httpOptions).pipe(
      tap((Skill: Skill) => console.log(`added Skill w/ id=${Skill.id}`)),
      catchError(this.handleError<Skill>('addSkill'))
    );
  }
  
  updateSkill (id, Skill): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Skill, httpOptions).pipe(
      tap(_ => console.log(`updated Skill id=${id}`)),
      catchError(this.handleError<any>('updateSkill'))
    );
  }
  
  deleteSkill (id): Observable<Skill> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Skill>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Skill id=${id}`)),
      catchError(this.handleError<Skill>('deleteSkill'))
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
