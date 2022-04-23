import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesComponent } from './entries/entries.component'
import { EntryDetailComponent } from './entry-detail/entry-detail.component'
import { EntryEditComponent } from './entry-edit/entry-edit.component'
import { EntryRemoveComponent } from './entry-remove/entry-remove.component'
import { EntrySearchComponent } from './entry-search/entry-search.component'
import { EntryNewComponent } from './entry-new/entry-new.component'

import { LanguagesComponent } from './languages/languages.component'
import { LanguageEditComponent } from './language-edit/language-edit.component'
import { LanguageNewComponent } from './language-new/language-new.component'

import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path : 'entries', component : EntriesComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'entries/detail/:id', component : EntryDetailComponent},
  { path : 'entries/edit/:id', component : EntryEditComponent},
  { path : 'entries/new', component : EntryNewComponent},
  { path : 'entries/remove/:id', component : EntryRemoveComponent},
  { path : 'entries/search/:text', component : EntrySearchComponent},

  { path : 'languages', component : LanguagesComponent},
  { path : 'languages/edit/:id', component : LanguageEditComponent},
  { path : 'languages/new', component : LanguageNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
