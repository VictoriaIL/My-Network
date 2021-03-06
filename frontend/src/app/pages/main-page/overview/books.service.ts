import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../../environments/environment";
import {BookInterface} from "../../../interfaces/book.interface";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseURl = `${environment.serverURL}overview`;

  constructor(private readonly http: HttpClient) {
  }

  getBooks(): Observable<BookInterface[]> {
    return this.http
      .get<BookInterface[]>(this.baseURl);
  }

  getBookById(id: string): Observable<BookInterface> {
    return this.http
      .get<BookInterface>(`${this.baseURl}/id/${id}`);
  }

  getFavoriteBooksOnly(): Observable<BookInterface[]> {
    return this.http
      .get<BookInterface[]>(`${this.baseURl}/favorite`);
  }

  getReadBooksOnly(): Observable<BookInterface[]> {
    return this.http
      .get<BookInterface[]>(`${this.baseURl}/read`);
  }

  toggleFavoriteFieldOfBookById(id: string, newValue: boolean): Observable<BookInterface> {
    return this.http
      .patch<BookInterface>(`${this.baseURl}/toggleLike/${id}`, {favorite: newValue});
  }

  toggleReadFieldOfBookById(id: string, newValue: boolean): Observable<BookInterface> {
    return this.http
      .patch<BookInterface>(`${this.baseURl}/toggleRead/${id}`, {read: newValue});
  }

  deleteBook(id: string): Observable<BookInterface> {
    const url = `${this.baseURl}/${id}`;
    return this.http.delete<BookInterface>(url);
  }

  addBook(book: any): Observable<BookInterface> {
    return this.http.post<any>(this.baseURl, book);
  }

  updateBook(book: BookInterface): Observable<BookInterface> {
    const url = `${this.baseURl}/${book.book_id}`
    return this.http.put<BookInterface>(url, book);
  }
}
