import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './notes/memory-database/in-memory-data.service';

import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NoteComponent } from './notes/note/note.component';
import { NoteService } from './notes/notes-service/note.service';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { AddNoteButtonComponent } from './notes/add-note-button/add-note-button.component';
import { AboutComponent } from './about/about.component';
import { NoteWrapperComponent } from './notes/note-wrapper/note-wrapper.component';
import { AddNoteDialogComponent } from './notes/add-note-dialog/add-note-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import 'hammerjs/hammer';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    AddNoteButtonComponent,
    AboutComponent,
    NoteWrapperComponent,
    AddNoteDialogComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MdDialogModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdButtonToggleModule,
    MdSidenavModule,
    MdSliderModule,
    MdToolbarModule,
    MdSlideToggleModule,
    MdGridListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        component: NoteWrapperComponent,
      },
      {
        path: 'notes/:status',
        component: NoteWrapperComponent
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100}),
  ],
  providers: [NoteService],
  bootstrap: [AppComponent],
  entryComponents: [AddNoteDialogComponent],
})
export class AppModule {
}
