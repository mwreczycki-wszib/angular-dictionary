import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Language } from '../language'

import { LanguageService } from '../language.service'


@Component({
  selector: 'app-language-edit',
  templateUrl: './language-edit.component.html',
  styleUrls: ['./language-edit.component.css']
})
export class LanguageEditComponent implements OnInit {

  language: Language

  constructor(private languageService: LanguageService,
    private location: Location,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.languageService.getLanguage(id).subscribe(language => this.language = language);
  }

  save(): void {
    this.languageService.updateLanguage(this.language)
      .subscribe(language => this.router.navigate(['/languages']))
  }

  goBack(): void {
    this.location.back();
  }
}
