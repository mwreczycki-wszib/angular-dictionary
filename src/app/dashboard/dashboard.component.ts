import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { DictionaryEntry } from '../dictionaryEntry';
import { EntryService } from '../entry.service';
import { LanguageService } from '../language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalEntries: number
  totalLanguages: number
  languages: Language[]

  text?: string;

  constructor(private entryService: EntryService, private languageService: LanguageService) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
    this.entryService.countTotalEntries().subscribe(totalEntries => this.totalEntries = totalEntries)
    this.languageService.countLanguages().subscribe(totalLanguages => this.totalLanguages = totalLanguages)
    this.languageService.getLanguages().subscribe(languages => this.languages = languages)
  }

  entryCountByLanguage(code: string): Observable<number>{
    return this.entryService.countEntriesByLanguage(code);
  }
}
