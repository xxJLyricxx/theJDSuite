import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JournalEntry } from '../models/journal-entry';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private apiUrl = 'https://api.thejdsuite.com/api/journal';

  constructor(private http: HttpClient) {}

  getEntries(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(this.apiUrl);
  }
}