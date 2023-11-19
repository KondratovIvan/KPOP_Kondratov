import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectedComponent } from './selected/selected.component';
import { TasksComponent } from './tasks/tasks.component';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SelectedComponent,
    TasksComponent,
  ],
  providers: [SelectedComponent, TasksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    IonicStorageModule.forRoot()
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
