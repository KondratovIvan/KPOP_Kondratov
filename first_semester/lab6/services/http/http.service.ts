import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  url: string = 'http://jsonplaceholder.typicode.com/todos';

  fetchTasks(): Observable<Object> {
    return this.http.get(this.url);
  }
}
