import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DictionaryEntry } from '../dictionaryEntry'
import { Language } from '../language'

import { EntryService } from '../entry.service'
import { LanguageService } from '../language.service'


@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  entry: DictionaryEntry
  languages: Language[]

  constructor(private route: ActivatedRoute,
    private entryService: EntryService,
    private languageService: LanguageService,
    private location: Location,
    private router: Router) { }

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

  save(): void {
    this.entryService.updateEntry(this.entry)
      .subscribe(entry => this.router.navigate(['/entries/detail/' + entry.id]))  }

  goBack(): void {
    this.location.back();
  }
}
