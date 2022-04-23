import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryNewComponent } from './entry-new/entry-new.component';
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { EntryRemoveComponent } from './entry-remove/entry-remove.component';
import { EntrySearchComponent } from './entry-search/entry-search.component';
import { LanguagesComponent } from './languages/languages.component'
import { LanguageEditComponent } from './language-edit/language-edit.component'
import { LanguageNewComponent } from './language-new/language-new.component'

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EntryNewComponent,
    EntryEditComponent,
    EntryRemoveComponent,
    EntrySearchComponent,
    LanguagesComponent,
    LanguageEditComponent,
    LanguageNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
