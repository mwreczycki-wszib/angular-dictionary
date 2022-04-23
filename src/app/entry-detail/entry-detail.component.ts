import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DictionaryEntry } from '../dictionaryEntry'
import { Language } from '../language'

import { EntryService } from '../entry.service'
import { LanguageService } from '../language.service'


@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  entry: DictionaryEntry
  languages: Language[]

  constructor(private route: ActivatedRoute,
    private entryService: EntryService,
    private languageService: LanguageService,
    private location: Location) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.getEntry(id)
      .subscribe(entry => this.entry = entry);
    this.languageService.getLanguages()
      .subscribe(languages => this.languages = languages);
  }

  goBack(): void {
    this.location.back();
  }
}
