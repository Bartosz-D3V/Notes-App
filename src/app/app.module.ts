import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './notes/memory-database/in-memory-data.service';

import { AppComponent } from './app.component';
import { NoteComponent } from './notes/note/note.component';
import { NoteService } from './notes/notes-service/note.service';
import { RouterModule } from '@angular/router';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { AddNoteButtonComponent } from './notes/add-note-button/add-note-button.component';
import { AboutComponent } from './about/about.component';
import { NoteWrapperComponent } from './notes/note-wrapper/note-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    AddNoteButtonComponent,
    AboutComponent,
    NoteWrapperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        component: NoteWrapperComponent,
        children: [
          {path: 'trash', component: NoteWrapperComponent}
        ]
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1}),
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
