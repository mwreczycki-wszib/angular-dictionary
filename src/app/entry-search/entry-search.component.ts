import { Component, OnInit } from '@angular/core';
import { DictionaryEntry } from '../dictionaryEntry'
import { EntryService } from '../entry.service'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-search',
  templateUrl: './entry-search.component.html',
  styleUrls: ['./entry-search.component.css']
})
export class EntrySearchComponent implements OnInit {

  entries: DictionaryEntry[]
  text: string;

  constructor(private entryService: EntryService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEntries()
  }

  getEntries(): void {
    this.text = this.route.snapshot.paramMap.get('text');
    this.entryService.entrySearch(this.text).subscribe(entries => this.entries = entries)
  }

  goBack(): void {
    this.location.back();
  }
}
