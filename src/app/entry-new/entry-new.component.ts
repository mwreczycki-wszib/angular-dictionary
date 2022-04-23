import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { DictionaryEntry } from '../dictionaryEntry'
import { Language } from '../language'

import { EntryService } from '../entry.service'
import { LanguageService } from '../language.service'


@Component({
  selector: 'app-entry-new',
  templateUrl: './entry-new.component.html',
  styleUrls: ['./entry-new.component.css']
})
export class EntryNewComponent implements OnInit {

  word: string
  description: string
  translation: string
  language: Language

  languages: Language[]

  constructor(
    private entryService: EntryService,
    private languageService: LanguageService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
    this.languageService.getLanguages()
      .subscribe(languages => this.languages = languages);
  }

  save(): void {
    this.entryService.addEntry({word : this.word, description : this.description, translation : this.translation, language : this.language} as DictionaryEntry)
      .subscribe(entry => this.router.navigate(['/entries/detail/' + entry.id]))  }

  goBack(): void {
    this.location.back();
  }
}
