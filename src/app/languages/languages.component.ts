import { Component, OnInit } from '@angular/core';
import { Language } from '../language'
import { LanguageService } from '../language.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[]

  constructor(private languageService: LanguageService, private router: Router) { }

  ngOnInit() {
    this.getLanguages()
  }

  getLanguages(): void {
    this.languageService.getLanguages().subscribe(languages => this.languages = languages)
  }

  removeLanguage(id: number): void {
    this.languageService.removeLanguage(id).subscribe(language =>
      this.getLanguages()
    )
  }

}
