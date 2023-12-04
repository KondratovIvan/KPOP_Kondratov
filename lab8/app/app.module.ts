import { HttpClientModule } from '@angular/common/http';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicStorageModule } from '@ionic/storage-angular';
import {FavoriteTasksComponent} from "./favorite-tasks/favorite-tasks.component";
import {TodoService} from "./todo.service";
import {FavoriteTasksService} from "./favorite-tasks.service";
@NgModule({
  declarations: [
    AppComponent,
    FavoriteTasksComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    IonicStorageModule.forRoot()
  ],
  providers: [TodoService, FavoriteTasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
