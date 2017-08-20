webpackJsonp([1,4],{0:function(t,e,n){t.exports=n("x35b")},"3d0p":function(t,e,n){"use strict";var o=n("3j3K"),i=n("xNRb");n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.noteService=t}return t.prototype.ngOnInit=function(){this.retrieveNotes()},t.prototype.retrieveNotes=function(){switch(this.filter){case"remaining":this.getRemainingNotes();break;case"starred":this.getStarredNotes();break;case"done":this.getDoneNotes();break;case"trash":this.getDeletedNotes()}},t.prototype.getRemainingNotes=function(){var t=this;this.noteService.notes.subscribe(function(e){return t.notes=e.filter(function(t){return!t._done&&!t._deleted&&!t._starred})})},t.prototype.getStarredNotes=function(){var t=this;this.noteService.notes.subscribe(function(e){return t.notes=e.filter(function(t){return t._starred&&!t._deleted})})},t.prototype.getDoneNotes=function(){var t=this;this.noteService.notes.subscribe(function(e){return t.notes=e.filter(function(t){return t._done&&!t._deleted&&!t._starred})})},t.prototype.getDeletedNotes=function(){var t=this;this.noteService.notes.subscribe(function(e){return t.notes=e.filter(function(t){return t._deleted})})},t.prototype.updateNote=function(t){this.noteService.update(t)},t}();r([n.i(o.O)(),a("design:type",String)],c.prototype,"filter",void 0),c=r([n.i(o._11)({selector:"app-notes-list",template:n("wRqa"),styles:[n("JL6A")]}),a("design:paramtypes",["function"==typeof(s=void 0!==i.a&&i.a)&&s||Object])],c);var s},"4QKn":function(t,e){t.exports="<h1>{{title}}</h1>\n"},"5xMp":function(t,e){t.exports='<md-sidenav-container class="c-sidenav">\r\n  <md-sidenav #sidenav mode="over" class="c-sidenav__list">\r\n    <h3 class="c-sidenav__title">Notes app</h3>\r\n    <a md-button class="c-sidenav__anchor" [routerLink]="[\'/notes\']">\r\n      <i class="material-icons">note</i>\r\n      Remaining</a>\r\n    <a md-button class="c-sidenav__anchor" [routerLink]="[\'/notes\', \'starred\']">\r\n      <i class="material-icons">star</i>Starred</a>\r\n    <a md-button class="c-sidenav__anchor" [routerLink]="[\'/notes\', \'done\']">\r\n      <i class="material-icons">done</i> Done</a>\r\n    <a md-button class="c-sidenav__anchor" [routerLink]="[\'/notes\', \'trash\']">\r\n      <i class="material-icons">delete</i> Trash</a>\r\n    <a md-button class="c-sidenav__anchor" [routerLink]="[\'/about\']">\r\n      <i class="material-icons">info</i> About</a>\r\n    <a md-button class="c-sidenav__anchor" href="https://github.com/Bartosz-D3V/Notes-App">\r\n      <i class="material-icons">people</i> Fork me on Github</a>\r\n  </md-sidenav>\r\n  <md-toolbar color="primary">\r\n    <button md-icon-button (click)="sidenav.toggle()">\r\n      <md-icon class="md-24">menu</md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n  <router-outlet></router-outlet>\r\n</md-sidenav-container>\r\n'},"Ddc+":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n,o,i,r){this._starred=!1,this._done=!1,this._deleted=!1,this.id=t,this.title=e,this.description=n,this._starred=o||!1,this._done=i||!1,this._deleted=r||!1}return t}()},Dzwx:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".dialog__textarea,.dialog__textfield{width:100%;height:100%;display:block}",""]),t.exports=t.exports.toString()},Iksp:function(t,e,n){"use strict";var o=n("Qbdm"),i=n("3j3K"),r=n("NVOs"),a=n("Fzro"),c=n("5oXY"),s=n("2Je8"),d=n("ZnDJ"),l=n("WcQG"),u=n("fYnu"),p=n("KN8t"),f=n("YWx4"),h=n("wpB2"),m=n("xNRb"),b=n("3d0p"),_=n("tM5K"),y=n("QdDP"),g=n("KE+6"),v=n("VqaS"),x=n("eyhy"),w=n("rxKx");n.n(w);n.d(e,"a",function(){return R});var j=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},R=function(){function t(){}return t}();R=j([n.i(i.b)({declarations:[f.a,h.a,b.a,_.a,y.a,g.a,v.a,x.a],imports:[o.a,p.a,r.a,a.a,s.a,u.a,u.b,u.c,u.d,u.e,u.f,u.g,u.h,u.i,u.j,u.k,c.a.forRoot([{path:"",redirectTo:"notes",pathMatch:"full"},{path:"notes",component:g.a},{path:"notes/:status",component:g.a},{path:"about",component:y.a,pathMatch:"full"},{path:"**",component:x.a}]),d.a.forRoot(l.a,{delay:100})],providers:[m.a],bootstrap:[f.a],entryComponents:[v.a]})],R)},JL6A:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".c-md-list{width:98%;margin-left:2%}.c-md-list__list-element{display:inline-block;margin-right:10px;margin-top:10px}@media only screen and (max-width:767px){.c-md-list__list-element{width:90%}}@media only screen and (min-width:768px){.c-md-list__list-element{width:48%}}@media only screen and (min-width:992px){.c-md-list__list-element{width:32%}}",""]),t.exports=t.exports.toString()},"KE+6":function(t,e,n){"use strict";var o=n("3j3K"),i=n("5oXY");n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.route=t,this.title="Notes app"}return t.prototype.ngOnInit=function(){var t=this;this.sub=this.route.params.subscribe(function(e){t.filter=void 0===e.status?"remaining":e.status})},t.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},t}();c=r([n.i(o._11)({selector:"app-note-wrapper",template:n("cq8q")}),a("design:paramtypes",["function"==typeof(s=void 0!==i.b&&i.b)&&s||Object])],c);var s},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},QdDP:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=i([n.i(o._11)({selector:"app-about",template:n("4QKn")}),r("design:paramtypes",[])],a)},VqaS:function(t,e,n){"use strict";var o=n("3j3K"),i=n("fYnu"),r=n("xNRb");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.dialogRef=t,this.noteService=e,this.widgetTitle="What would you like to do?"}return t.prototype.createNote=function(t,e,n){this.noteService.create(+t.value,e.value,n.value)},t.prototype.isInvalid=function(t,e,n){return""===t.value||""===e.value||""===n.value},t}();s=a([n.i(o._11)({selector:"app-add-note-dialog",template:n("pLix"),styles:[n("Dzwx")]}),c("design:paramtypes",["function"==typeof(d=void 0!==i.l&&i.l)&&d||Object,"function"==typeof(l=void 0!==r.a&&r.a)&&l||Object])],s);var d,l},WcQG:function(t,e,n){"use strict";var o=n("Ddc+");n.d(e,"a",function(){return i});var i=function(){function t(){}return t.prototype.createDb=function(){return{notes:[new o.a(1,"Task of the day!","Buy a milk."),new o.a(2,"If I will find time...","Go & buy groceries.")]}},t}()},YWx4:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return r});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=function(){function t(){}return t}();r=i([n.i(o._11)({selector:"app-root",template:n("5xMp"),styles:[n("sQHO")]})],r)},bfNc:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".c-md-card{background-color:#ffffa5;padding-left:0;padding-right:0;padding-top:0}.c-md-card__header{background-color:#ffe8a3;width:100%}.c-md-card__title{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.c-md-card__textarea,.c-md-card__title{margin-left:10px;margin-right:10px;margin-top:10px}.c-md-card__textarea{width:95%;height:100%;resize:none;overflow:hidden;text-overflow:ellipsis;text-align:justify;max-lines:3}.c-md-card__textarea--transparent{background:transparent none;border:none}.c-md-card__textarea--transparent:focus,.c-md-card__textarea--transparent:hover{border:none;outline:none}.c-md-card__input{width:70%;resize:none;display:inline;font-size:2em}.c-md-card__input--transparent{background:transparent none;border:none}.c-md-card__input--transparent:focus,.c-md-card__input--transparent:hover{border:none;outline:none}.c-md-card__btn{width:20%}.c-md-card__actions,.c-md-card__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-left:10px;margin-right:10px}",""]),t.exports=t.exports.toString()},cq8q:function(t,e){t.exports='<div class="widget widget--center">\n  <h1>\n    {{title}}\n  </h1>\n</div>\n<app-notes-list [filter]="filter"></app-notes-list>\n<app-add-note-button></app-add-note-button>\n'},eyhy:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return r});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=function(){function t(){this.widgetTitle="404",this.widgetSubTitle="Page you tried to access does not exist."}return t}();r=i([n.i(o._11)({selector:"app-page-not-found",template:n("tBAH")})],r)},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},pLix:function(t,e){t.exports='<h1 md-dialog-title>{{widgetTitle}}</h1>\r\n<div md-dialog-content>\r\n  <md-input-container class="dialog__numberfield">\r\n    <input type="number" mdInput placeholder="ID" value="3" #newNoteId required>\r\n  </md-input-container>\r\n  <md-input-container class="dialog__textarea">\r\n    <input type="text" mdInput placeholder="Title" value="Some title" #newNoteTitle required>\r\n  </md-input-container>\r\n  <md-input-container class="dialog__textfield">\r\n    <textarea type="text" mdInput placeholder="Description" value="Some description" #newNoteDescription\r\n              required>Sample description</textarea>\r\n  </md-input-container>\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button md-dialog-close="Close">Close</button>\r\n  <button md-button md-dialog-close="Submit" (click)="createNote(newNoteId, newNoteTitle, newNoteDescription)"\r\n          [disabled]="isInvalid(newNoteId, newNoteTitle, newNoteDescription)">\r\n    Submit\r\n  </button>\r\n</div>\r\n'},q2Sw:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".c-md-fab--bottom_fixed{position:fixed;right:20px;bottom:20px;z-index:10}",""]),t.exports=t.exports.toString()},sQHO:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".c-sidenav{position:fixed;height:100%;width:100%}.c-sidenav__list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media only screen and (max-width:767px){.c-sidenav__list{width:50%}}@media only screen and (min-width:768px){.c-sidenav__list{width:30%}}@media only screen and (min-width:992px){.c-sidenav__list{width:20%}}.c-sidenav__title{font-size:2em;font-family:Bad Script,cursive;text-align:center}.c-sidenav__anchor,.c-sidenav__title{display:block;position:relative;padding-top:10px;height:8%;width:100%}.c-sidenav__anchor{font-size:1.2em}",""]),t.exports=t.exports.toString()},tBAH:function(t,e){t.exports='<div class="widget widget--center">\n  <h1>\n    {{widgetTitle}}\n  </h1>\n  <h2>\n    {{widgetSubTitle}}\n  </h2>\n</div>\n'},tHuK:function(t,e){t.exports='<button md-fab class="c-md-fab--bottom_fixed" (click)="openDialog()">\r\n  <md-icon>add</md-icon>\r\n</button>\r\n'},tM5K:function(t,e,n){"use strict";var o=n("3j3K"),i=n("fYnu"),r=n("VqaS");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.dialog=t}return t.prototype.openDialog=function(){this.dialog.open(r.a)},t}();s=a([n.i(o._11)({selector:"app-add-note-button",template:n("tHuK"),styles:[n("q2Sw")]}),c("design:paramtypes",["function"==typeof(d=void 0!==i.m&&i.m)&&d||Object])],s);var d},vkEF:function(t,e){t.exports='<md-card class="c-md-card">\r\n  <md-card-header class="c-md-card__header">\r\n    <md-card-title class="c-md-card__title">\r\n      <input title="" class="no-extra c-md-card__input c-md-card__input--transparent"\r\n             [(ngModel)]="note.title" name="title" (blur)="updateNote($event)" placeholder="{{note?.title}}">\r\n      <button md-button class="c-md-card__btn" (click)="markAsStarred()">\r\n        <i class="material-icons">star_border</i>\r\n      </button>\r\n    </md-card-title>\r\n  </md-card-header>\r\n  <md-card-content>\r\n    <textarea title="" class="no-extra c-md-card__textarea c-md-card__textarea--transparent"\r\n              [(ngModel)]="note.description" name="description" (blur)="updateNote($event)">\r\n      {{note?.description}}\r\n    </textarea>\r\n  </md-card-content>\r\n  <md-card-actions class="c-md-card__actions c-md-card--border c-md-card--yellow">\r\n    <button md-button class="c-md-card__btn" (click)="markAsDone()">Done</button>\r\n    <button md-button class="c-md-card__btn" (click)="markAsDiscarded()">Discard</button>\r\n  </md-card-actions>\r\n</md-card>\r\n'},wRqa:function(t,e){t.exports='<div class="c-md-list">\r\n  <div class="c-md-list__list-element" *ngFor="let note of notes">\r\n    <app-note [note]="note" (change)="updateNote(note)"></app-note>\r\n  </div>\r\n</div>\r\n'},wpB2:function(t,e,n){"use strict";var o=n("3j3K"),i=n("Ddc+");n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.change=new o.F(!0)}return t.prototype.markAsDone=function(){this.note._done=!0,this.change.emit(this.note)},t.prototype.markAsDiscarded=function(){this.note._deleted=!0,this.change.emit(this.note)},t.prototype.markAsStarred=function(){this.note._starred=!0,this.change.emit(this.note)},t.prototype.updateNote=function(){this.change.emit(this.note)},t}();r([n.i(o.O)(),a("design:type","function"==typeof(s=void 0!==i.a&&i.a)&&s||Object)],c.prototype,"note",void 0),r([n.i(o._5)(),a("design:type","function"==typeof(d=void 0!==o.F&&o.F)&&d||Object)],c.prototype,"change",void 0),c=r([n.i(o._11)({selector:"app-note",template:n("vkEF"),styles:[n("bfNc")]})],c);var s,d},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("3j3K"),i=n("O61y"),r=n("Iksp");n("kZql").a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(r.a)},xNRb:function(t,e,n){"use strict";var o=n("3j3K"),i=n("Fzro"),r=n("Ddc+"),a=n("+pb+"),c=(n.n(a),n("TfWX"));n.n(c);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.notesUrl="app/notes",this.headers=new i.b({"Content-Type":"application/json"}),this.options=new i.c({headers:this.headers}),this._notes=new c.BehaviorSubject(Array()),this.getNotes()}return Object.defineProperty(t.prototype,"notes",{get:function(){return this._notes},enumerable:!0,configurable:!0}),t.prototype.getNotes=function(){var t=this;return this.http.get(this.notesUrl,this.options).map(function(t){return t.json()}).subscribe(function(e){t._notes.next(e.data)},function(t){return console.log(t)})},t.prototype.update=function(t){var e=this,n=this.notesUrl+"/"+t.id;return this.http.put(n,JSON.stringify(t),this.options).map(function(t){return t.json()}).subscribe(function(){var n=e._notes.getValue(),o=n.indexOf(n.find(function(e){return t.id===e.id}));n.splice(o,1),n.splice(o,0,t),e._notes.next(n)},function(t){return console.log(t)})},t.prototype.create=function(t,e,n){var o=this,i=this.notesUrl+"/"+t,a=new r.a(t,e,n);return this.http.post(i,JSON.stringify(a),this.options).map(function(t){return t.json()}).subscribe(function(){var t=o._notes.getValue();t.push(a),o._notes.next(t)},function(t){return console.log(t)})},t}();l=s([n.i(o.c)(),d("design:paramtypes",["function"==typeof(u=void 0!==i.d&&i.d)&&u||Object])],l);var u}},[0]);