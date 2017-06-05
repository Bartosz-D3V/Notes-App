import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './memoryDatabase/in-memory-data.service';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteService } from './notes-service/note.service';
import { RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'notes',
        component: NoteComponent
      }
    ]),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1}),
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
