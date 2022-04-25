import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Language } from './language'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const defaultLanguage = {id: -1, code : 'XX', name : 'None'}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private baseUrl = '/api';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseUrl + "/dictionary/language").pipe(
      catchError(this.handleError<Language[]>('getLanguages', []))
    );
  }

  countLanguages(): Observable<number> {
    return this.http.get<number>(this.baseUrl + "/dictionary/language/property/count").pipe(
      catchError(this.handleError<number>('countLanguages', 0))
    );
  }

  getLanguage(id: number): Observable<Language> {
    return this.http.get<Language>(this.baseUrl + "/dictionary/language/" + id).pipe(
      catchError(this.handleError<Language>('getLanguage', defaultLanguage as Language))
    );
  }

  removeLanguage(id: number): Observable<Language> {
    return this.http.delete<Language>(this.baseUrl + "/dictionary/language/" + id).pipe(
      catchError(this.handleError<Language>('removeLanguage', defaultLanguage as Language))
    );
  }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(this.baseUrl + "/dictionary/language", language, httpOptions).pipe(
      catchError(this.handleError<Language>('addLanguage', defaultLanguage as Language))
    );
  }

  updateLanguage(entry: Language): Observable<Language> {
    return this.http.put<Language>(this.baseUrl + "/dictionary/language", entry, httpOptions).pipe(
      catchError(this.handleError<Language>('updateLanguage', defaultLanguage as Language))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a EntryService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EntryService: ${message}`);
  }
}
