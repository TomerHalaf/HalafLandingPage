import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpService: HttpClient) { }

  getNewsLinks():Observable<string> {
    return this.httpService.get<string>("https://drive.google.com/file/d/1wJn-596vE4R3bywP4JXcmfGBV4oKG3H3");
  }
}
