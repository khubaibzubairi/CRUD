import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './bookSchema';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public allRecords(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/book`);
  }
}
