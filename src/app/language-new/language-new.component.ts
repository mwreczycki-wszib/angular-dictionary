import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Language } from '../language'

import { LanguageService } from '../language.service'


@Component({
  selector: 'app-language-new',
  templateUrl: './language-new.component.html',
  styleUrls: ['./language-new.component.css']
})
export class LanguageNewComponent implements OnInit {

  code: string
  name: string

  constructor(private languageService: LanguageService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
  }

  save(): void {
    this.languageService.addLanguage({code : this.code, name : this.name} as Language)
      .subscribe(language => this.router.navigate(['/languages']))  }

  goBack(): void {
    this.location.back();
  }
}
