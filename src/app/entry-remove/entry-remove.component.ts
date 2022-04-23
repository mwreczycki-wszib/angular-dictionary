import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DictionaryEntry } from '../dictionaryEntry'

import { EntryService } from '../entry.service'

@Component({
  selector: 'app-entry-remove',
  templateUrl: './entry-remove.component.html',
  styleUrls: ['./entry-remove.component.css']
})
export class EntryRemoveComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private entryService: EntryService,
    private location: Location, private router: Router) { }

  ngOnInit() {
    this.removeEntry()
  }

  removeEntry(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.removeEntry(id)
      .subscribe(entry => this.router.navigate(['/entries']));
  }

}
