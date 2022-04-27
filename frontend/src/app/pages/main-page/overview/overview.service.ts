import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {BookInterface} from "../../../interfaces/book.interface";

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  private serverUrl = environment.serverURL;

  constructor(private readonly http: HttpClient) { }

  getBooks(): Observable<BookInterface[]> {
    return this.http
      .get<BookInterface[]>(this.serverUrl + 'overview');
  }
}
