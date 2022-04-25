import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DictionaryEntry } from './dictionaryEntry'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const defaultDictionaryEntry = {id: -1, word: 'None', translation: 'None', description: 'None', language: {id: -1, code : 'XX', name : 'None'}}

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private baseUrl = '/api';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEntries(): Observable<DictionaryEntry[]> {
    return this.http.get<DictionaryEntry[]>(this.baseUrl + "/dictionary/entry").pipe(
      catchError(this.handleError<DictionaryEntry[]>('getEntries', []))
    );
  }

  countTotalEntries(): Observable<number> {
    return this.http.get<number>(this.baseUrl + "/dictionary/entry/property/count").pipe(
      catchError(this.handleError<number>('countTotalEntries', 0))
    );
  }

  countEntriesByLanguage(code: string): Observable<number> {
    return this.http.get<number>(this.baseUrl + "/dictionary/entry/property/count", {
      params : {
        code : code
      }
    }).pipe(
      catchError(this.handleError<number>('countEntriesByLanguage', 0))
    );
  }

  entrySearch(text: string): Observable<DictionaryEntry[]> {
    return this.http.get<DictionaryEntry[]>(this.baseUrl + "/dictionary/entry/operation/search", {
      params : {
        text : text
      }
    }).pipe(
      catchError(this.handleError<DictionaryEntry[]>('entrySearch', []))
    );
  }

  getEntry(id: number): Observable<DictionaryEntry> {
    return this.http.get<DictionaryEntry>(this.baseUrl + "/dictionary/entry/" + id).pipe(
      catchError(this.handleError<DictionaryEntry>('getEntry', defaultDictionaryEntry as DictionaryEntry))
    );
  }

  removeEntry(id: number): Observable<DictionaryEntry> {
    return this.http.delete<DictionaryEntry>(this.baseUrl + "/dictionary/entry/" + id).pipe(
      catchError(this.handleError<DictionaryEntry>('removeEntry', defaultDictionaryEntry as DictionaryEntry))
    );
  }

  addEntry(entry: DictionaryEntry): Observable<DictionaryEntry> {
    return this.http.post<DictionaryEntry>(this.baseUrl + "/dictionary/entry", entry, httpOptions).pipe(
      catchError(this.handleError<DictionaryEntry>('addEntry', defaultDictionaryEntry as DictionaryEntry))
    );
  }

  updateEntry(entry: DictionaryEntry): Observable<DictionaryEntry> {
    return this.http.put<DictionaryEntry>(this.baseUrl + "/dictionary/entry", entry, httpOptions).pipe(
      catchError(this.handleError<DictionaryEntry>('updateEntry', defaultDictionaryEntry as DictionaryEntry))
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
