import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private apiUrl = 'https://localhost:7182/api/Items'; //Production API endpoint
  private apiUrl = 'http://192.168.0.19/api/Items'; //Development API endpoint
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Get all items (Read)
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl).pipe(
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  // Get a single item by ID (Read)
  getItem(id: number): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      catchError(this.handleError<Item>('getItem'))
    );
  }

  // Add a new item (Create)
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }

  // Update an item (Update)
  updateItem(id: number, item: Item): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, item, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

  // Delete an item (Delete)
  deleteItem(id: number): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Item>(url, this.httpOptions).pipe(
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
