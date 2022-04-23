import { Component, OnInit } from '@angular/core';
import { DictionaryEntry } from '../dictionaryEntry'
import { EntryService } from '../entry.service'

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries: DictionaryEntry[]

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.getEntries()
  }

  getEntries(): void {
    this.entryService.getEntries().subscribe(entries => this.entries = entries)
  }

}
